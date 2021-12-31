import express from 'express';
const app = express();
const port = 3000;

// start the express server
app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});