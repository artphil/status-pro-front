import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { LoginFormProps, SignUpFormProps, loginType, signUpType } from "types/userTypes";

export const loginValidate = z.object({
  username: z.string().min(1, "Email obrigatório").email("Email inválido"),
  password: z.string().min(1, "Senha obrigatória")
});

export function useLogin() {
  const {
    register,
    handleSubmit,
    getValues,
    getFieldState,
    formState: { errors },
  } = useForm<LoginFormProps>({ mode: "onBlur", resolver: zodResolver(loginValidate) });

  const onSubmit = handleSubmit(async (data: loginType) => {
    const { username, password } = data;
    localStorage.setItem("token", username);///////// retirar
    console.log(username, password);///////// retirar
  });

  return {
    register,
    errors,
    onSubmit,
    getValues,
    getFieldState,
  };
}

export const signUpValidate = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  username: z.string().min(1, "Email é obrigatório").email("Email inválido"),
  password1: z.string().min(6, "Senha deve ter no mínimo 6 caracteres")
    .regex(/(?=.*[A-Z])(?=.*[0-9])/, { message: "A senha deve conter letras e números" }),
  password2: z.string(),
}).refine((fields) => fields.password1 === fields.password2, {
  path: ["password2"],
  message: "Senhas diferentes",
});

export function useSignUp() {
  const {
    register,
    handleSubmit,
    getValues,
    getFieldState,
    formState: { errors },
  } = useForm<SignUpFormProps>({ mode: "onBlur", resolver: zodResolver(signUpValidate) });

  const onSubmit = handleSubmit(async (data: signUpType) => {
    const { username, password1 } = data;
    localStorage.setItem("token", username);///////// retirar
    console.log(username, password1); ///////// retirar
  });

  return {
    register,
    errors,
    onSubmit,
    getValues,
    getFieldState,
  };
}