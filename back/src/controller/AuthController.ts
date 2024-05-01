import {Request, Response} from 'express';
import User from '../database/models/user';
import {validationResult} from "express-validator";
import md5 from "md5";
import jwt from "jsonwebtoken";

export const register = async (req: Request,
                               res: Response): Promise<Response<typeof User>> => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }

    const [user, created] = await User.findOrCreate({
            where: {email: req.body.email},
            defaults: {
                email: req.body.email,
                password: md5(req.body.password),
                firstName: req.body.firstname,
                lastName: req.body.lastname,
                is_admin: false
            }
        }
    );

    if (created) {
        return res.json({result: 'User created with success ! Please now use these credentials to access at dashboard. '});
    }


    return res.status(409).send({result: 'Error user with this email already exist !'})
}

export const login = async (req: Request,
                            res: Response): Promise<Response<typeof User>> => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }

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

        return res.json({result: token});
    } else {
        return res.json({result: 'Invalid credentials'});
    }
}