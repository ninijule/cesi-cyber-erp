import "./config";
import createApp from "./src/app";
import {initDb} from './src/database/';


void main();

async function main(): Promise<void> {

    await initDb();
    createApp();
}