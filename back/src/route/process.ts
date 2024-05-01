import {Router} from 'express';
import {createProcess, deleteProcess, getProcess, getProcesses} from '../controller/ProcessController';
import {verifyToken} from "../middelware/authentication";

const router = Router();


router.get('/process', verifyToken, getProcesses);
router.get('/process/:id', verifyToken, getProcess);
router.post('/process', verifyToken, createProcess);
router.delete('/process/:id', verifyToken, deleteProcess);


export default router;