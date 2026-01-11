import {z} from 'zod';

export const createUserSchema = z.object({
    body: z.object({
        name: z
        .string().min(3, 'o nome precisa ter no minimo 3 letras '),
        email: z
        .email('email precisa ser valido'),
        password: z
        .string()
        .min(6, 'precisa de pelo menos 6 caracteres')
    }),
})