import  {Router, Request, Response, } from 'express';
import {CreateUserController} from '../src/controllers/User/CreateUserController'
import { validateSchema } from './middlewares/validateSchema';
import { createUserSchema } from './schemas/userSchema'

const router = Router();

//-- Rotas de Usuario --
router.post('/users', validateSchema(createUserSchema ), new CreateUserController().handle);


 export {router};