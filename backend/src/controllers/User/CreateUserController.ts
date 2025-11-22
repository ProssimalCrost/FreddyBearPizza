import { Request, response, Response } from "express";
import {CreateUserServive} from '../../services/User/CreateUserService'

class CreateUserController{
    async handle(req: Request, res: Response){

        const {name, email, password} = req.body; //desconstruindo o copo da requisicao

        const createUserServive = new CreateUserServive();

       const user = createUserServive.execute({
        name,
        email,
        password
       });

        return res.json(user);
    }
}
export {CreateUserController}