import {Router} from 'express';
import {getProcess} from '../controller/ProcessController';
import {verifyToken} from "../middelware/authentication";
import {isAdmin} from "../middelware/authorization";

const router = Router();


router.get('/process', verifyToken, getProcess);


export default router;