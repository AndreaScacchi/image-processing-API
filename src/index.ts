import express from 'express';
const app = express();
const port = 3000;

// define a route handler for the default home page
app.get('/api', (req, res) => {
    res.send('Server working');
});

// start the express server
app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});