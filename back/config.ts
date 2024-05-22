import path from "path";
import fs from "node:fs";
import {configDotenv} from "dotenv";


const envFile = process.env.NODE_ENV === 'production' ? '.env.production' : '.env';
const envPath = path.resolve(__dirname, '../', envFile);

if (fs.existsSync(envPath)) {
    configDotenv({path: envPath});
} else {
    console.error(`Le fichier d'environnement ${envFile} n'a pas été trouvé`);
    process.exit(1); // Arrêter le processus si le fichier est manquant
}
console.log('Start application in mode : ' + process.env.NODE_ENV);

