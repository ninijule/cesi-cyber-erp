import {NextFunction, Request, Response} from "express";

export const isAdmin = async (req: Request,
                              res: Response,
                              next: NextFunction) => {

    if (req.body.user != null) {
        if (req.body.user.is_admin) {
            next();
        }else{
            return res.sendStatus(401);
        }

    }
}