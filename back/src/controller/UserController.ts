import {Request, Response} from 'express';
import User from '../database/models/user';

export const getUsers = async (_req: Request,
                               res: Response): Promise<Response<typeof User>> => {

    const user = await User.findAll({
        attributes: {
            exclude: ['password'],
        },
    });
    return res.json(user);
}


export const updateUser = async (req: Request,
                                   res: Response): Promise<Response<typeof User>> => {
    await User.update(
        {
            is_admin: true
        },
        {
            where: {
                id: req.params.id
            }
        }
    );
    return res.json({result: 'UserId: ' + req.params.id + ' is now admin !'});
}

export const deleteUser = async (req: Request,
                                 res: Response): Promise<Response<typeof User>> => {
    await User.destroy(
        {
            where: {
                id: req.params.id
            }
        }
    );
    return res.sendStatus(200);
}
