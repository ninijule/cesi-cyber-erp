import jwt from "jsonwebtoken";
import {NextFunction, Request, Response} from "express";

export const verifyToken = async (req: Request,
                                  res: Response, next: NextFunction)=> {
    const token = req.headers['authorization'];

    // Vérifier s'il y a un token
    if (typeof token !== 'undefined') {
        // Extraire le token du format "Bearer <token>"
        const tokenParts = token.split(' ');
        const bearerToken = tokenParts[1];

        // Vérifier le token
        jwt.verify(bearerToken, process.env["JWT_PASS_PHRASE"]!, (err, decoded) => {
            if (err) {
                // Si le token est invalide, retourner une erreur 403 (Forbidden)
                return res.sendStatus(403);
            } else {
                // Si le token est valide, stocker les informations de l'utilisateur dans l'objet req
                req.body.user = decoded;
                // Passer à l'étape suivante du middleware
                next();
            }
        });
    } else {
        // Si aucun token n'est fourni, retourner une erreur 401 (Unauthorized)
        return res.sendStatus(401);
    }
}