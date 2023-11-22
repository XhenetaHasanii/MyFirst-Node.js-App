const express = require('express');

const router = express.Router();
const Blog = require('../model/blog');
const { update } = require('lodash');


//Getting all
router.get('/', async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.json(blogs);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
})

//Getting One
router.get('/:id', getBlog, (req, res) => {
    res.send(res.blog.name);

});
//Getting One
router.get('/:id', (req, res) => {
    res.json({ requestParams: req.params, requestQuery: req.query });

})

// Creating one
router.post('/', async (req, res) => {
    console.log(req.body);
    const blog = new Blog({
        title: req.body.title,
        snippet: req.body.snippet,
        body: req.body.body
    });
    try {
        const newBlog = await blog.save();
        res.status(201).json(newBlog);
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
})

// Updating One
router.patch('/', (req, res) => {

})
//Deleting One 
router.delete('/', (req, res) => {

})

async function getBlog(req, res, next) {
    let blog
    try {
        const blog = await Blog.findById(req.param.id);
        if (blog == null) {
            return res.status(404).json({ message: 'Can not find blog' });
        }
    }
    catch (err) {

        res.status(500).json({ message: err.message });
    }
    res.blog = blog;
    next();
}

module.exports = router;


