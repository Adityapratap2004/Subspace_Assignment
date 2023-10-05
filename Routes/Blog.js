const express=require('express');
const router=express.Router();
const {dataRetrival,searchBlogs} =require('../Controller/blog')

router.get('/blog-stats',dataRetrival);
router.get('/blog-search',searchBlogs)

module.exports=router;