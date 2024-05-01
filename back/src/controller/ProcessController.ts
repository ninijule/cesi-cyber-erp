import {Request, Response} from 'express';
import User from '../database/models/user';
import {validationResult} from "express-validator";
import md5 from "md5";


export const getProcess = async (req: Request,
                            res: Response): Promise<Response<typeof User>> => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }


    return res.json();
}