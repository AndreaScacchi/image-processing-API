import express from 'express';
import { getImage, resizeImage } from '../utilities/processImages';
const route = express.Router();

route.get('/', async (req: express.Request, res: express.Response): Promise<void> => {
    const image = await getImage(
        req.query.resizedImage as string,
        parseInt(req.query.width as string),
        parseInt(req.query.height as string)
    );
    
    if(image) {
        res.sendFile(image);
    } else {
        try {
            const width = parseInt(req.query.width as string);
            const height = parseInt(req.query.height as string);
            if(isNaN(width) || isNaN(height)) {
                res.status(400).send('An error occurred with width or height');
                return;
            }
            const filePath = await resizeImage(
                req.query.resizedImage as string,
                width,
                height
            );
            res.status(200).sendFile(filePath);
        } catch(err) {
            if(err instanceof Error) {
                res.status(404).send('Provide a valid image, with a valid width and height');
            } else {
                res.send('An error occurred when resize the image');
            }
        }
    }
});





export default route;