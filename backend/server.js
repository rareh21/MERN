const express = require('express');
const notes = require('./data/notes');
const dotenv = require('dotenv');
const app = express();
dotenv.config();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('API is running');
})

app.get('/api/notes', (req, res) => {
    res.json(notes);
})

app.get('/api/notes/:id', (req, res) => {
    const note = notes.find(item => item._id === req.params.id);
    res.send(note);
})

app.listen(port, () => console.log(`server started on ${port}`));