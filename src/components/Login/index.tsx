import { useState } from 'react';
import { useNavigate } from 'react-router';

import { ReactComponent as EmailIco } from 'assets/icons/email.svg';
import { ReactComponent as PassIco } from 'assets/icons/pass.svg';

import { LoginButtonNormal, LoginButtonWarm, LoginButtons, LoginContainer, LoginField, LoginTitle } from './stlyle';
import { useLogin } from 'hooks/userHooks';


function Login() {
  const { onSubmit, errors, register, getValues } = useLogin();

  const [userName, setUserName] = useState('');

  const navigate = useNavigate();

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSubmit();
    navigate('/');
  }

  return (
    <LoginContainer onSubmit={event => submit(event)}>
      <LoginTitle>Login</LoginTitle>
      <LoginField>
        <EmailIco />

        <input type="text" placeholder="Usuário" {...register('username')}
        // onChange={event => setUserName(event.target.value)} 
        />
      </LoginField>
      <p>{errors.username?.message ?? ''}</p>

      <LoginField>
        <PassIco />
        <input type="password" placeholder="Senha" {...register('password')} />
      </LoginField>
      <p>{errors.password?.message ?? ''}</p>

      <LoginButtons>
        <LoginButtonNormal type='submit'>Entrar</LoginButtonNormal>
        <LoginButtonNormal onClick={() => navigate('/signup')} >Cadastro</LoginButtonNormal>
        <LoginButtonWarm onClick={() => alert('Serviço não implementado')} >Recuperar senha</LoginButtonWarm>
      </LoginButtons>
    </LoginContainer>
  );
}

export default Login;