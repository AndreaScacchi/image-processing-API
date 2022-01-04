import path from 'path';
import { getImage, resizeImage } from '../utilities/processImages';



describe('Test the image process', () => {
    beforeAll(async () => {
        await resizeImage('fjord', 200, 200);
    });
    it('returns the image path', async () => {
        const filePath = path.join(__dirname, "../../images/thumbs/", 'fjord(200x200).jpeg');
        expect(await getImage('fjord', 200, 200)).toBe(filePath);
    });
});