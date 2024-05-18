import {Router} from 'express';
import {createCar, deleteCar, getCar, getCars} from '../controller/CarController';
import {verifyToken} from "../middelware/authentication";

const router = Router();


router.get('/car', verifyToken, getCars);
router.get('/car/:id', verifyToken, getCar);
router.post('/car', verifyToken, createCar);
router.delete('/car/:id', verifyToken, deleteCar);


export default router;