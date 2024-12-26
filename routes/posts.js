const express = require('express')
const router = express.Router()
const { json } = require('stream/consumers');


let posts = [
    {id: 1, title: 'Post One'},
    {id: 2, title: 'Post Two'},
    {id: 3, title: 'Post Three'},
]

router.get('/', (req, res) => {
    const limit = parseInt(req.query.limit);

    if(!isNaN(limit) && limit > 0) {
        return res.json(posts.slice(0, limit))
    }
    
    res.json(posts);
    
})

router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);

    if (!post) {
        return res.status(400).json({msg: `Post with id ${id} not found`});
    }

    res.status(200).json(post);
})

module.exports = router;