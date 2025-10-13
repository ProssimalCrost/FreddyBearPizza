import express, {Request, Response, NextFunction} from 'express';
import {router} from './routes';
import {usuarios} from './usuarios';

const app = express();
app.use(express.json());
app.use(router);


 app.listen(3000, () => console.log('Servidor online!') )

 app.get('/', (req: Request, res: Response, next: NextFunction) => {
    return res.json({message: 'API is running!'})
 });

 app.get('/usuarios', (req: Request, res: Response, next: NextFunction) => {
    return res.json({usuarios})
 });

 app.post('/usuarios', (req: Request, res: Response, next: NextFunction) => {
   usuarios.push({id: 5, nome: 'Golden Freddy', idade: 35});
   return res.json({message: 'Usuário adicionado com sucesso!'})
 });

 app.put('/usuarios/:id', (req: Request, res: Response, next: NextFunction) => {
   const id = Number(req.params.id);
   const {nome, idade} = req.body;
   const usuario = usuarios.find(u => u.id === id);

   if (!usuario) return res.status(404).json({ message: 'Usuário não encontrado' });

   if (nome) usuario.nome = nome;
   if (idade) usuario.idade = idade;

  return res.json({ message: 'Usuário atualizado com sucesso!' });
 });

 