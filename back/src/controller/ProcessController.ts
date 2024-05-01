import {Request, Response} from 'express';
import Process from "../database/models/process";
import {validationResult} from "express-validator";


export const getProcesses = async (req: Request,
                                   res: Response): Promise<Response<typeof Process>> => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }

    const process = await Process.findAll();
    return res.json({result: process});
}

export const getProcess = async (req: Request,
                                   res: Response): Promise<Response<typeof Process>> => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }

    const process = await Process.findByPk(req.params.id);
    return res.json({result: process});
}

export const createProcess = async (req: Request,
                                    res: Response): Promise<Response<typeof Process>> => {


    const [process, created] = await Process.findOrCreate({
        where: {
            name: req.body.name,
            defaults: {
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                is_active: req.body.is_active
            }
        }
    });

    if (created) {
        return res.json({result: process});
    }

    return res.status(409).send({result: 'Error a process with this name already exist !'})

}


export const deleteProcess = async (req: Request,
                                    res: Response): Promise<Response<typeof Process>> => {

    await Process.destroy({
        where: {
            id: req.params.id
        }
    });

    return res.json({result: 'Process destroyed with success !'});

}