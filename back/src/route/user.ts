import {Router} from 'express';
import {verifyToken} from "../middelware/authentication";
import {isAdmin} from "../middelware/authorization";
import {getUsers} from "../controller/UserController";

const router = Router();


router.get('/user', verifyToken, isAdmin, getUsers);


export default router;