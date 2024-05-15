import {Router} from 'express';
import {login, register} from '../controller/AuthController';
import {body} from "express-validator";
import {validation} from "../middelware/validation";

const router = Router();

router.post('/auth/login',
    body('email').isEmail().notEmpty().trim(),
    body('password').notEmpty().trim().isLength({min: 8, max: 20}).escape(),
    validation,
    login);

router.post('/auth/register',
    body('firstName').notEmpty().escape().isLength({min: 0, max: 20}),
    body('lastName').notEmpty().escape().isLength({min: 0, max: 20}),
    body('email').isEmail().notEmpty().trim(),
    body('password').notEmpty().trim().isLength({min: 8, max: 20}).escape(),
    validation,
    register);


export default router;