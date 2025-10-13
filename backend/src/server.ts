import express, {Request, Response, NextFunction} from 'express';
import {router} from './routes';


const app = express();
app.use(express.json());
app.use(router);


 app.listen(3000, () => console.log('Servidor online!') )

 app.get('/', (req: Request, res: Response, next: NextFunction) => {
    return res.json({message: 'API is running!'})
 })