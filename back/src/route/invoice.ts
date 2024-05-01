import {Router} from 'express';
import {validation} from "../middelware/validation";
import {verifyToken} from "../middelware/authentication";
import {isAdmin} from "../middelware/authorization";
import {generateInvoice} from "../controller/InvoiceController";

const router = Router();


router.post('/invoice', validation, verifyToken, isAdmin, generateInvoice);


export default router;