// v1 - import dotenv
import 'dotenv/config';
// v2 - import dotenv
// import dotenv from 'dotenv';
// dotenv.config();

export const getEnvVar = (name, defaultValue) => {
    const value = process.env[name];

    if(value) return value;

    if(defaultValue) return defaultValue;

    return new Error(`Cannot find process.env.${name}`);
}