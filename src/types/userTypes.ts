import { z } from 'zod';

export const loginValidate = z.object({
  email: z.string().min(1, 'Email é obrigatório').email('Email inválido'),
  password: z.string().min(1, 'Senha é obrigatória')
});

export type LoginFormProps = z.infer<typeof loginValidate>;

export type loginType = {
  email: string,
  password: string
}

export const signUpValidate = z.object({
  name: z.string().min(1, 'Nome é obrigatório'),
  nickname: z.string().min(1, 'Nome é obrigatório'),
  email: z.string().min(1, 'Email é obrigatório').email('Email inválido'),
  password: z.string().min(6, 'Senha deve ter no mínimo 6 caracteres')
    .regex(/(?=.*[A-Z])(?=.*[0-9])/, { message: 'A senha deve conter letras e números' }),
  confirmPassword: z.string(),
}).refine((fields) => fields.password === fields.confirmPassword, {
  path: ['password2'],
  message: 'Senhas diferentes',
});

export type SignUpFormProps = z.infer<typeof signUpValidate>;

export type signUpType = {
  name: string,
  nickname: string,
  email: string,
  password: string
  confirmPassword: string
}