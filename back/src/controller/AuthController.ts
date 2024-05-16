import {Request, Response} from 'express';
import User from '../database/models/user';
import md5 from "md5";
import jwt from "jsonwebtoken";

export const register = async (req: Request,
                               res: Response): Promise<Response<typeof User>> => {

    const [user, created] = await User.findOrCreate({
            where: {email: req.body.email},
            defaults: {
                email: req.body.email,
                password: md5(req.body.password),
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                is_admin: false
            }
        }
    );

    if (created) {
        return res.json({result: 'Success : User created with success ! Please now use these credentials to access at dashboard. '});
    }


    return res.status(409).send({result: 'Error : This email already exist !'})
}

export const login = async (req: Request,
                            res: Response): Promise<Response<typeof User>> => {


    const user = await User.findOne({
        where: {
            email: req.body.email,
            password: md5(req.body.password)
        }
    });

    if (user !== null) {
        const token = jwt.sign({
            id: user?.get().id, is_admin: user?.get().is_admin
        }, process.env["JWT_PASS_PHRASE"]!);

        return res.json({token: token});
    } else {
        return res.json({result: 'Invalid credentials'});
    }
}