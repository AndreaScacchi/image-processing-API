import express from 'express';
import { getImage, resizeImage } from '../utilities/processImages';
const route = express.Router();

route.get('/', async (req: express.Request, res: express.Response): Promise<void> => {
    const image = await getImage(
        req.query.resizedImage as string,
        parseInt(req.query.width as string),
        parseInt(req.query.height as string)
    )
})





export default route;