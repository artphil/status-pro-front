import { useState } from 'react';
import { useNavigate } from 'react-router';

import { ReactComponent as EmailIco } from 'assets/icons/email.svg';
import { ReactComponent as PassIco } from 'assets/icons/pass.svg';
import { ReactComponent as UserIco } from 'assets/icons/user.svg';

import { LoginButtonNormal, LoginButtons, LoginContainer, LoginField, LoginTitle } from './stlyle';


function SignUp() {
  const [userName, setUserName] = useState('');

  const navigate = useNavigate();

  function login() {
    localStorage.setItem('token', userName);
    navigate('/');
  }

  return (
    <LoginContainer>
      <LoginTitle>Cadastro</LoginTitle>
      <LoginField>
        <UserIco />
        <input type="text" placeholder="Nome"
          onChange={event => setUserName(event.target.value)} />
      </LoginField>
      <LoginField>
        <EmailIco />
        <input type="text" placeholder="Email"
          onChange={event => setUserName(event.target.value)} />
      </LoginField>
      <LoginField>
        <PassIco />
        <input type="password" placeholder="Senha" />
      </LoginField>
      <LoginField>
        <PassIco />
        <input type="password" placeholder="Repetir a senha" />
      </LoginField>
      <LoginButtons>
        <LoginButtonNormal onClick={login} >Enviar</LoginButtonNormal>
        <LoginButtonNormal onClick={() => navigate('/login')} >Fazer login</LoginButtonNormal>
      </LoginButtons>
    </LoginContainer>
  );
}

export default SignUp;