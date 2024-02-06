import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import {
  LoginFormProps,
  SignUpFormProps,
  loginType,
  loginValidate,
  signUpType,
  signUpValidate
} from 'types/userTypes';


export function useLogin() {
  const {
    register,
    handleSubmit,
    getValues,
    getFieldState,
    formState: { errors },
  } = useForm<LoginFormProps>({ mode: 'onBlur', resolver: zodResolver(loginValidate) });

  const onSubmit = handleSubmit(async (data: loginType) => {
    const { username, password } = data;
    localStorage.setItem('token', username);///////// retirar
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

export function useSignUp() {
  const {
    register,
    handleSubmit,
    getValues,
    getFieldState,
    formState: { errors },
  } = useForm<SignUpFormProps>({ mode: 'onBlur', resolver: zodResolver(signUpValidate) });

  const onSubmit = handleSubmit(async (data: signUpType) => {
    const { username, password1 } = data;
    localStorage.setItem('token', username);///////// retirar
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