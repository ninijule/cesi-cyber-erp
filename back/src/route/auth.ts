import { Router } from 'express';
import {register} from '../controller/UserController';
const router = Router();

router.post('/login', register);
router.post('/register');


export default router;