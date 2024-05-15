import express, {Express, Request, Response} from "express";
import compression from "compression";
import router from "./route/index";
import cors from 'cors';


function createApp(): Express {

    const app = express();
    app.use(compression());
    app.use(express.json());
    app.use(cors());


    const PORT = process.env.PORT;

    app.get("/admin", (_request: Request, response: Response) => {
        response.status(200).send("Nothing here");
    });

    app.use(router);

    app.listen(PORT, () => {
        console.log("Server running at PORT: ", PORT);
    }).on("error", (error) => {
        // gracefully handle error
        throw new Error(error.message);
    });

    return app;
}

export default createApp;
