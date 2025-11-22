import { Request, response, Response } from "express";

class CreateUserController{
    async handle(req: Request, res: Response){
        return response.json({message: "Usuario criado com sucesso!"});
    }
}
export {CreateUserController}