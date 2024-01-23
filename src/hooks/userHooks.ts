import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { LoginFormProps, loginType } from "types/userTypes";

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
    localStorage.setItem("token", username);
    console.log(username, password);
  });

  return {
    register,
    errors,
    onSubmit,
    getValues,
    getFieldState,
  };
}