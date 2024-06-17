import {Router} from 'express';
import {redirectUser} from "../controller/TrollController";

const router = Router();


router.get('/admin', redirectUser);


export default router;