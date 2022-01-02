import { promises as fspromises } from 'fs';
import path from 'path';
import sharp from 'sharp';

const getImage = async (imageName: string, width: number, height: number): Promise<string> => {
    const imagesDirectory = path.join(__dirname, 'images');
    const filePath = path.join(imagesDirectory, `${imageName.toLowerCase()}(${width}x${height}).jpg`);
}