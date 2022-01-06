import { promises as fspromises } from 'fs';
import path from 'path';
import sharp from 'sharp';

const getImage = async (imageName: string, width: number, height: number): Promise<string> => {
    const imagesDirectory = path.join(__dirname, '/images/');
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

const resizeImage = async (imageName: string, width: number, height: number): Promise<string> => {
    const imagesPath = path.join(__dirname, '../images/', `${imageName.toLowerCase()}(${width}x${height}).jpg`);
    const outputImages = path.join(__dirname, '/images', `${imageName.toLowerCase()}(${width}x${height}).jpg`);
    let resizedImage: fspromises.FileHandle;
    
    try {
        resizedImage = await fspromises.open(imagesPath, 'r');
    } catch {
        throw new Error("Cannot find the specified image!");
    }

    try {
        await sharp(await resizedImage.readFile()).resize({ width, height }).toFile(outputImages);
        resizedImage.close();
    } catch (err) {
        resizedImage.close();
        if(err instanceof Error) {
            console.log(`Cannot resize the image: ${err.message}`);
        }
    }
    return outputImages;
}

export { getImage, resizeImage };