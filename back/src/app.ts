import express, {Express, NextFunction, Request, Response} from "express";
import compression from "compression";
import logger from "./logger";
import router from "./route/index";
import cors from 'cors';


function createApp(): Express {

    const app = express();
    app.use(compression());
    app.use(express.json());
    app.use(cors());

    app.use((req: Request, _res: Response, next: NextFunction) => {
        let ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
        let fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;

        const token = req.headers['authorization'];
        const tokenParts = token?.split(' ');
        const bearerToken = tokenParts?.[1];

        logger.info("IP : " + ip +  " || URL : " + fullUrl + " || Http Verb : " + req.method +  " || Token : " +  bearerToken);
       next();
    });


    const PORT = process.env.PORT;

    app.get("/git", (_request: Request, response: Response) => {
        response.status(200).send("Nothing here");
    });

    app.use(router);

    app.listen(PORT, () => {
        logger.info("Server running at PORT: " +  PORT);
    }).on("error", (error) => {
        // gracefully handle error
        logger.error(error);
        throw new Error(error.message);
    });

    return app;
}

export default createApp;
