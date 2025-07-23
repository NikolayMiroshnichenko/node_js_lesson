import fs from 'node:fs/promises'
import { USER_PATH_DB } from '../constants/users.js';

export const writeUsers = async (data) => {
    await fs.writeFile(USER_PATH_DB, JSON.stringify(data, null, 4));
    return data;
};

