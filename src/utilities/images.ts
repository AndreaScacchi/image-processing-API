import { promises as fspromises } from 'fs';
import path from 'path';
import sharp from 'sharp';

const getImage = async (imageName: string, width: number, height: number): Promise<string> => {
    const imagesDirectory = path.join(__dirname, '../images/thumbs/');
    const filePath = path.join(imagesDirectory, `${imageName.toLowerCase()}(${width}x${height}).jpg`);

    try {
        await fspromises.readdir(imagesDirectory);
    } catch {
        await fspromises.mkdir(imagesDirectory);
    }

    try {
        await fspromises.readFile(filePath, { flag: 'r' });
        //return filePath;
    } catch(err) {
        console.log(`error ${err}`);
    }
    return filePath;
};

const resizeImage = async (imageName: string, width: number, height: number): Promise<String> => {
    
}