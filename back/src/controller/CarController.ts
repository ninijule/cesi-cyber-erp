import {Request, Response} from 'express';
import Car from "../database/models/car";
import {validationResult} from "express-validator";


export const getCars = async (req: Request,
                                   res: Response): Promise<Response<typeof Car>> => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }

    const process = await Car.findAll();
    return res.json(process);
}

export const getCar = async (req: Request,
                                 res: Response): Promise<Response<typeof Car>> => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }

    const car = await Car.findByPk(req.params.id);
    return res.json(car);
}

export const createCar = async (req: Request,
                                    res: Response): Promise<Response<typeof Car>> => {


    const [car, created] = await Car.findOrCreate({
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
        return res.json(car);
    }

    return res.status(409).send({result: 'Error a car with this name already exist !'})

}


export const deleteCar = async (req: Request,
                                    res: Response): Promise<Response<typeof Car>> => {

    await Car.destroy({
        where: {
            id: req.params.id
        }
    });

    return res.json({result: 'Car destroyed with success !'});

}