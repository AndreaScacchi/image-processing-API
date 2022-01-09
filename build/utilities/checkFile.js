"use strict";
/*import { access } from "fs/promises";
import { constants } from "fs";

const checkFile = async (path: string): Promise<boolean> => {
    try {
        await access(path, constants.R_OK | constants.W_OK);
        return true;
    } catch (err) {
        if (err instanceof Error) console.log(`Error: ${err.message}`);
        return false;
    }
};

export default checkFile;*/
