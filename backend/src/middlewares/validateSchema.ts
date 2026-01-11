import { NextFunction, Request, Response } from 'express';
import { ZodError, ZodType } from 'zod';

export const validateSchema = (schema: ZodType) => 
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            await schema.parseAsync({
              body: req.body,
              query: req.query,
              params: req.params,  
            });
            return next();
        }catch (error) {
            if (error instanceof ZodError) {
                return res.status(400).json({
                    errro:"error de validacao",
                    details: error.issues.map((issue) => ({
                        campo: issue.path.slice(1).join('.'),
                        mensagem: issue.message,
                    }))
                })
            }
        }
    }