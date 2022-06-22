import express, {Request, Response} from 'express';
import path from 'path';
import mainRoutes from './routes/index';

const server = express();

server.use(express.static(path.join(__dirname,'../public')));

server.use('/', mainRoutes);

//Recurso página não encontrada
server.use((_req: Request, _res: Response) =>{
  _res.status(404).send('Página não encontrada!');
});



server.listen(80);