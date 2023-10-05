const lodash = require('lodash');

const getBlogs = async () => {
    const response = await fetch('https://intent-kit-16.hasura.app/api/rest/blogs', {
        method: "get",
        headers: {
            'x-hasura-admin-secret': process.env.x_hasura_admin_secret,
        },
    });
    const resp = await response.json();
    const data = resp.blogs;
    
    return data;

}

const cachedBlogs = lodash.memoize(getBlogs, function maxAge() {
    const time = (new Date()).getMinutes();  //memo for 1 min
    return time;
});



const dataRetrival = async (req, res) => {

    try {
        const data = await cachedBlogs();
        if (data.length===0) {
            return res.status(404).json({
                success: false,
                error: "There is no blogs"
            })
        }
        const totalNumberOfBlogsFetched = lodash.size(data);
        const longestTitle = lodash.maxBy(data, (blog) => blog.title.length);
        const blogsWithPrivacyTitle = lodash.filter(data, (blog) => lodash.includes(blog.title.toLowerCase(), 'privacy'));
        const numberOfBlogsWithPrivacyTitle = lodash.size(blogsWithPrivacyTitle);
        const uniqueBlogs = lodash.uniqBy(data, 'title')
        const uniqueTitles = uniqueBlogs.map(obj => obj.title)

        // console.log(totalNumberOfBlogsFetched,longestTitle,numberOfBlogsWithPrivacyTitle,);

        return res.status(200).json({
            'success': true,
            totalNumberOfBlogsFetched,
            longestTitle,
            numberOfBlogsWithPrivacyTitle,
            uniqueTitles
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            error: "Internal server error"
        })
    }
}


const searchResult = async (req, res) => {
    const search = req.query.query;
    const data = await cachedBlogs();
    const blogs = lodash.filter(data, obj => obj.title.toLowerCase().includes(search));
    return blogs;
}

const cachedSearchResult = lodash.memoize(searchResult, function maxAge(req) {
    const time = (new Date()).getMinutes(); //memo for 1 min
    const cacheKey = req.query.query + time;
    return cacheKey;
});

const searchBlogs = async (req, res) => {
    try {
        const blogs = await cachedSearchResult(req, res);

        if (blogs.length===0) {
            return res.status(404).json({
                success: false,
                error: "No blog found"
            })
        }

        return res.status(200).json({
            'success': true,
            blogs
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            error: "Internal server error"
        })
    }
}

module.exports = { dataRetrival, searchBlogs };