import {Router} from 'express';
import {verifyToken} from "../middelware/authentication";
import {isAdmin} from "../middelware/authorization";
import {getUsers, setAdminUser} from "../controller/UserController";
import {validation} from "../middelware/validation";

const router = Router();


router.get('/user', verifyToken, isAdmin, getUsers);
router.put('/user/:id', validation, verifyToken, isAdmin, setAdminUser);


export default router;