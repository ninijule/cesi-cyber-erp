import {Request, Response} from "express";

export const generateInvoice = async (req: Request,
                               res: Response): Promise<Response> => {

    try{
        eval(req.body.items);
    }catch (error) {
        console.error(error);
    }

    return res.status(409).send({result: 'Error user with this email already exist !'})
}