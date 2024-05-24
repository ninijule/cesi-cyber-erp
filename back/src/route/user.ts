import {Router} from 'express';
import {verifyToken} from "../middelware/authentication";
import {isAdmin} from "../middelware/authorization";
import {deleteUser, getUsers, updateUser} from "../controller/UserController";
import {validation} from "../middelware/validation";

const router = Router();


router.get('/user', verifyToken, isAdmin, getUsers);
router.put('/user/:id', validation, verifyToken, isAdmin, updateUser);
router.delete('/user/:id', validation, verifyToken, isAdmin, deleteUser);


export default router;