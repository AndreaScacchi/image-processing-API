import { access } from 'fs/promises';
import { constants } from 'fs';

const checkFile = async (Path: string): Promise<boolean> => {
    try {
        await access(Path, constants.R_OK | constants.W_OK);
        return true;
    } catch (err) {
        if (err instanceof Error) console.log(`Error: ${err.message}`);
        return false;
    }
};

export default checkFile;