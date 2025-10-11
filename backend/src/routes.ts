 import  {Response, Request, Router} from 'express';

const router = Router();

router.get('/teste', (req:Request, res: Response) => {
    return res.json({message:'Funcionando!'})
 })

 export {router};