import {Request, Response} from 'express';
import User from '../database/models/user';
import {validationResult} from "express-validator";

export const getUsers = async (_req: Request,
                               res: Response): Promise<Response<typeof User>> => {

    const user = await User.findAll();
    return res.json({result: user});
}


export const createUser = async (req: Request,
                               res: Response): Promise<Response<typeof User>> => {

    const user = await User.findAll();
    return res.json({result: user});
}
