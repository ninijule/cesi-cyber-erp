import createApp from "./src/app";
import {configDotenv} from "dotenv";
import {initDb} from './src/database/';
import path from "path";


configDotenv({path: path.resolve(__dirname, '../.env')});



void main();



/**
 * Server entrypoint.
 */
async function main(): Promise<void> {

    await initDb();
    createApp();
}