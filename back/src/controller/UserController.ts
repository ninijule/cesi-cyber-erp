import {Handler, NextFunction, Request, Response} from 'express';
import User from '../database/models/user';

export const register: Handler = async (req: Request,
                                        res: Response,
                                        next: NextFunction,): Promise<Response<typeof User>> => {
    const users = await User.findAll();
    return res.json(users);

}