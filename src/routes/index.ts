import { Router, Request, Response } from "express";

const router = Router();

router.get('/', (_req: Request, _res: Response)=>{
    _res.send('Olá Mundo!');

});

router.get('/contato', (_req: Request, _res: Response)=>{
    _res.send('Formulário de Contato');

});

router.get('/sobre', (_req: Request, _res: Response)=>{
    _res.send('Página institucional sobre a empresa');

});

router.get('/noticias', (_req: Request, _res: Response)=>{
    _res.send('Lista de notícias');

});

export default router;