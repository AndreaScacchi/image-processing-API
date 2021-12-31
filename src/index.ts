import express from 'express';
import path from 'path';
const app = express();
const port = 5000;

app.use(express.static(path.join(__dirname, '/images')));

// define endpoint
app.get('/', (req, res) => {
    res.send('NASA explore the Universe🌎🪐☄️🧑‍🚀🔭');
});

// start the express server
app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});

export default app;