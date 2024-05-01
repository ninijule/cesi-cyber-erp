import {Router} from 'express';
import {register, login} from '../controller/AuthController';
import {body} from "express-validator";
import {validation} from "../middelware/validation";

const router = Router();

router.post('/login',
    body('email').isEmail().notEmpty().trim(),
    body('password').notEmpty().trim().isLength({min: 8, max: 20}).escape(),
    validation,
    login);

router.post('/register',
    body('firstname').notEmpty().escape().isLength({min: 0, max: 20}),
    body('lastname').notEmpty().escape().isLength({min: 0, max: 20}),
    body('email').isEmail().notEmpty().trim(),
    body('password').notEmpty().trim().isLength({min: 8, max: 20}).escape(),
    validation,
    register);


export default router;