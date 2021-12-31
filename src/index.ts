import express from 'express';
import path from 'path';
const app = express();
const port = 5000;

// middleware
app.use(express.static(path.join(__dirname, '/images')));

// start the express server
app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});

export default app;