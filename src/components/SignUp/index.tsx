import { useState } from 'react';
import { useNavigate } from 'react-router';
import apiAuth from 'services/apiAuth';
import { PulseLoader } from 'react-spinners';

import { LoginButton, LoginContainer, LoginField, LoginTitle, Container, EmailIcon, UserIcon, PassIcon, StyledLink } from './style';

function SignUp() {
  const [form, setForm] = useState({ name: '', nickname: '', email: '', password: '', confirmPassword: '' });
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  function handleForm(e: any) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSignUp(e: any) {
    e.preventDefault();
    setIsLoading(true);

    apiAuth.signUp(form)
      .then(res => {
        console.log(res.data[0]);
        localStorage.setItem('token', form.name);
        setIsLoading(false);
        navigate('/');
      })
      .catch(err => {
        console.log(err);
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
            name="name"
            required
            placeholder="Nome"
            disabled={isLoading}
            value={form.name}
            onChange={handleForm} />
        </LoginField>
        <LoginField>
          <UserIcon />
          <input
            type="text"
            name="nickname"
            required
            placeholder="Nickname"
            disabled={isLoading}
            value={form.nickname}
            onChange={handleForm}
          />
        </LoginField>
        <LoginField>
          <EmailIcon />
          <input
            name="email"
            placeholder="Email"
            type="email"
            required
            disabled={isLoading}
            value={form.email}
            onChange={handleForm}
          />
        </LoginField>
        <LoginField>
          <PassIcon />
          <input
            name="password"
            placeholder="Senha"
            type="password"
            required
            disabled={isLoading}
            value={form.password}
            onChange={handleForm}
          />
        </LoginField>
        <LoginField>
          <PassIcon />
          <input
            name="confirmPassword"
            placeholder="Repetir a senha"
            type="password"
            required
            disabled={isLoading}
            value={form.confirmPassword}
            onChange={handleForm}
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