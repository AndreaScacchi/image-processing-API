import express from 'express';

// router object
const routes = express.Router();

// define endpoint
app.get('/', (req, res) => {
    res.send('NASA explore the Universe🌎🪐☄️🧑‍🚀🔭');
});