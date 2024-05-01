import {Request, Response} from 'express';
import User from '../database/models/user';
import {validationResult} from "express-validator";
import Process from "../database/models/process";


export const getProcess = async (req: Request,
                                 res: Response): Promise<Response<typeof User>> => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }

    const process = Process.findAll();
    return res.json({result: process});
}