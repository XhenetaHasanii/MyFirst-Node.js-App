const express = require('express')

const router = express.Router()
const Blog = require('../model/blog')


//Getting all
router.get('/', async (req, res) => {
    try {
        const blogs = await Blog.find()
        res.send(blogs);
    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }
})

//Getting One
router.get('/:id', (req, res) => {
    res.send('hello world');

})
// Creating one
router.post('/', async (req, res) => {
console.log(req);
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
module.exports = router;


