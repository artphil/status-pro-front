import { useState } from 'react';
import { useNavigate } from 'react-router';
import { PulseLoader } from 'react-spinners';

import { useSignUp } from 'hooks/userHooks';

import { LoginButton, LoginContainer, LoginField, LoginTitle, Container, EmailIcon, UserIcon, PassIcon, StyledLink } from './styles';


function SignUp() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const { onSubmit, register } = useSignUp();

  function handleSignUp(e: React.FormEvent<HTMLFormElement>) {
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
      <LoginContainer onSubmit={handleSignUp}>
        <LoginTitle>Cadastro</LoginTitle>
        <LoginField>
          <UserIcon />
          <input
            type="text"
            required
            placeholder="Nome"
            disabled={isLoading}
            {...register('name')}
          />
        </LoginField>
        <LoginField>
          <UserIcon />
          <input
            type="text"
            required
            placeholder="Nickname"
            disabled={isLoading}
            {...register('nickname')}
          />
        </LoginField>
        <LoginField>
          <EmailIcon />
          <input
            placeholder="Email"
            type="email"
            required
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
        <LoginField>
          <PassIcon />
          <input
            placeholder="Repetir a senha"
            type="password"
            required
            disabled={isLoading}
            {...register('confirmPassword')}
          />
        </LoginField>
        <LoginButton disabled={isLoading}>
          {isLoading ?
            (<PulseLoader color="#aeaeae" size={7} speedMultiplier={.3} margin={7} />)
            :
            ('Cadastrar')}
        </LoginButton>
        <StyledLink to='/login'>Possui conta? Clique aqui para fazer login!</StyledLink>
      </LoginContainer>
    </Container>
  );
}

export default SignUp;