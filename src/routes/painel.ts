import { Router, Request, Response } from "express";

const router = Router();

router.get('/', (_req: Request, _res: Response)=>{
    _res.send('Home do Painel');

});

router.get('/noticias', (_req: Request, _res: Response)=>{
    _res.send('Lista de notícias cadastradas');

});


export default router;