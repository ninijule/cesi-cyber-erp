import {Router} from 'express';
import {createProcess, getProcesses} from '../controller/ProcessController';
import {verifyToken} from "../middelware/authentication";

const router = Router();


router.get('/process', verifyToken, getProcesses);
router.post('/process', verifyToken, createProcess);


export default router;