import {Request, Response} from 'express';

export const redirectUser = async (_req: Request,
                                   res: Response) => {
    res.redirect("https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley");

}


