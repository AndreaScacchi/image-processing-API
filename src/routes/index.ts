import express from 'express';

// router object
const routes = express.Router();

// define endpoint
routes.get('/', (req, res) => {
    res.send('NASA explore the Universe🌎🪐☄️🧑‍🚀🔭');
});

export default routes;