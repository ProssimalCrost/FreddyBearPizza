 import express, {Request, Response, NextFunction} from 'express';
import {router} from './routes.js';


 const app = express();

 app.listen(3000, () => console.log('Servidor online!') )