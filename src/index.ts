import express from 'express';
import routes from './routes/index';
import path from 'path';
const app = express();
const port = 5000;

// use the router object as middleware
app.use('/routes', routes);

// start the express server
app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});

export default app;