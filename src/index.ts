import express from 'express';
const app = express();
const port = 5000;

// define a route handler for the default home page
app.get('/', (req, res) => {
    res.send('NASA explore the Universe🌎🪐☄️🧑‍🚀🔭');
});

// start the express server
app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});

export default app;