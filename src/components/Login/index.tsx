import { useState } from 'react';
import { PulseLoader } from 'react-spinners';
import { useNavigate } from 'react-router-dom';

import { useLogin } from 'hooks/userHooks';

import { Container, LoginTitle, LoginField, StyledLink, LoginButton, LoginContainer, EmailIcon, PassIcon } from 'components/SignUp/styles';


function Login() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const { onSubmit, register } = useLogin();

  function handleSignIn(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    onSubmit()
      .then(() => {
        setIsLoading(false);
        navigate('/');
      })
      .catch(err => {
        alert(err.response.data);
        setIsLoading(false);
      });
  }


  return (
    <Container>
      <LoginContainer onSubmit={handleSignIn}>
        <LoginTitle>Login</LoginTitle>
        <LoginField>
          <EmailIcon />
          <input
            placeholder="Email"
            type="email"
            disabled={isLoading}
            {...register('email')}
          />
        </LoginField>
        <LoginField>
          <PassIcon />
          <input
            placeholder="Senha"
            type="password"
            required
            disabled={isLoading}
            {...register('password')}
          />
        </LoginField>
        <LoginButton disabled={isLoading}>
          {isLoading ?
            (<PulseLoader color="#aeaeae" size={7} speedMultiplier={.3} margin={7} />)
            :
            ('Entrar')}
        </LoginButton>
        <StyledLink to='/signup'>Sem conta? Clique aqui para cadastrar-se!</StyledLink>
      </LoginContainer>
    </Container>
  );
}

export default Login;
