import fs from 'node:fs/promises';
import { USER_PATH_DB } from '../constants/users.js';

export const readUsers = async () => {
    // const buffer = await fs.readFile(USER_PATH_DB);
    // const text = buffer.toString(); // default utf-8 

    const data = await fs.readFile(USER_PATH_DB, 'utf-8');
    return JSON.parse(data);
};