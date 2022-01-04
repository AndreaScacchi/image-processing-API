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
    } catch(err) {
        let errorMessage = 'Got an error trying to read the file';
        if(err instanceof Error) {
            errorMessage = `${errorMessage}: ${err.message}`;
        }
        console.log(errorMessage);
    }
    return filePath;
};

const resizeImage = async (imageName: string, width: number, height: number): Promise<String> => {
    const imagesPath = path.join(__dirname, '/images', `${imageName.toLowerCase()}(${width}x${height}).jpg`);
    const outputImages = path.join(__dirname, '../images/thumbs', `${imageName.toLowerCase()}(${width}x${height}).jpeg`);

    
    try {
        await fspromises.open(imagesPath, 'r');
    } catch(err) {
        if(err instanceof Error) {
            console.log(`Specified image not found: ${err.message}`);
        }
    }

    try {
        await sharp(await fspromises.readFile()).resize({ width, height }).toFile(outputImages);
        fspromises.close();
    } catch (err) {
        fspromises.close();
        if(err instanceof Error) {
            console.log(`Cannot resize the image: ${err.message}`);
        }
    }
    return outputImages;
}