import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import apiAuth from 'services/apiAuth';

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
    return apiAuth.signIn(data)
      .then(res => {
        console.log(res.data[0]);
        localStorage.setItem('token', data.email);///////// retirar
      })
      .catch(err => {
        alert(err.response.data);
      });
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
    return apiAuth.signUp(data)
      .then(res => {
        console.log(res.data[0]);
      })
      .catch(err => {
        alert(err.response.data);
      });
  });

  return {
    register,
    errors,
    onSubmit,
    getValues,
    getFieldState,
  };
}