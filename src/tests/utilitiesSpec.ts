import path from 'path';
import { getImage, resizeImage } from '../utilities/processImages';
import checkFile from '../utilities/checkFile';

describe('Test to find out if the file/image exist', async () => {
    const rightPath = 'images/santamonica350x350.jpg';
    const incorrectPath = 'images/santamonic350x350.jpg';

    it('expecta that file exist', async () => {
        const 
    })
})


describe('Test the image process', () => {
    beforeAll(async () => {
        await resizeImage('santamonica', 200, 200);
    });
    it('returns the image path', async () => {
        const filePath = path.join(__dirname, "../../images/thumbs/", 'santamonica(200x200).jpeg');
        expect(await getImage('santamonica', 200, 200)).toBe(filePath);
    });
});