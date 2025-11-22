import  {Router} from 'express';
import {CreateUserController} from '../src/controllers/User/CreateUserController'

const router = Router();

//-- Rotas de Usuario --
router.post('/users', new CreateUserController().handle)


 export {router};