# Subspace_Assignment

**PROBLEM STATEMENT:**<br>
Blog Analytics with Express and Lodash <br>

**DESCRIPTION:** <br>
It is a backend middleware that analyzes data from a third-party blog API, offering insightful statistics to clients and a blog search feature <br>
  **Bonus** : It implements a caching mechanism using Lodash's `memoize` function to store the analytics results and search results for a certain period. <br>

**TECH STACK:** <br>
Express.js, Node.js <br>

**INSTALLATION:** <br>
To install Node.js (if not already installed), follow these steps:

1. Visit the official Node.js website: [https://nodejs.org/en](https://nodejs.org/en).
2. Download the appropriate Node.js installer for your operating system (e.g., Windows, macOS, Linux).
3. Follow the installation instructions provided on the Node.js website to complete the installation.

After installing Node.js, open your terminal and navigate to the folder where you want to run the following commands. Assuming you've navigated to the correct folder, execute the commands one by one:

```bash
# Initialize a new Node.js project. This will create a package.json file.
npm init

# Install dependencies from the current directory (the dot signifies the current directory).
npm install .
```

These commands will set up a new Node.js project, create a `package.json` file, and install dependencies from the current directory, which effectively installs the project's own code and dependencies listed in the `package.json` file.



**ROUTES:**
This application has two routes.
1. /api/blog-stats
This route fetches data from third-user API, then analyse the data using Lodash, and return the following statistics to the user.
	Total number of blogs,title of the longest blog,blogs with "privacy" in the title, blogs with "privacy" in the title
2. /api/blog-search?queury=YOUR_QUERY
This route fetches all the blogs which have the query included in their titles.

**DEPENDENCIES:**
1. express
	Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
2. dotenv
	Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env. 
3. lodash
	Lodash makes JavaScript easier by taking the hassle out of working with arrays, numbers, objects, strings, etc.
4. nodemon
	nodemon is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected.

**Created by:-**
This project was created by Aditya Pratap Singh. You can reach out to me via the following links. <br>
Email - 2004adityaprataps@gmail.com <br>
Linkedin- https://www.linkedin.com/in/aditya-pratap-singh-971b25229/ <br>
