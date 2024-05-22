import path from "path";
import fs from "node:fs";
import {configDotenv} from "dotenv";


const envFile = '.env';
const envPath = path.resolve(__dirname, '../', envFile);

if (fs.existsSync(envPath)) {
    configDotenv({path: envPath});
} else {
    console.error(`Attention le fichier d'environnement ${envFile} n'a pas été trouvé`);
}
console.log('Start application in mode : ' + process.env.NODE_ENV);

