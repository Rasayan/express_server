const express = require('express');
const path = require('path');
const posts = require('./routes/posts')
const port = process.env.PORT || 8000

const app = express();

// app.use(express.static(path.join(__dirname, 'src')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/src/index.html'))
})

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, '/src/about.html'))
})

app.use('/api/posts', posts)


app.listen(port, () => console.log(`Server running on node ${port}`));