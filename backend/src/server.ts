import 'dotenv/config';
import express, {Request, Response, NextFunction} from 'express';
import {router} from './routes';
import {usuarios} from './usuarios';
import cors from 'cors';


const app = express();
app.use(express.json());
app.use(cors());
app.use(router);

// comando para rodar o servidor: npx ts-node-dev "src/server.ts"

app.listen(3333, () => console.log('Servidor online!') )

