import { useState } from 'react';
import apiAuth from 'services/apiAuth';
import { PulseLoader } from 'react-spinners';
import { Container, LoginTitle, LoginField, StyledLink, LoginButton, LoginContainer, EmailIcon, PassIcon } from 'components/SignUp/style';
import { useNavigate } from 'react-router-dom';

import { useLogin } from 'hooks/userHooks';


function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const { onSubmit, register } = useLogin();

  function handleForm(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSignIn(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    apiAuth.signIn(form)
      .then(res => {
        setIsLoading(false);
        console.log(res.data[0]);
        localStorage.setItem('token', 'nome qualquer');
        navigate('/');
      })
      .catch(err => {
        alert(err.response.data);
        setIsLoading(false);
      });
  }

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // onSubmit();
    navigate('/');
  }

  return (
    <Container>
      <LoginContainer onSubmit={handleSignIn}>
        <LoginTitle>Login</LoginTitle>
        <LoginField>
          <EmailIcon />
          <input
            name="email"
            placeholder="Email"
            type="email"
            required
            disabled={isLoading}
            value={form.email}
            onChange={handleForm} />
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

// <FormContainer onSubmit={event => submit(event)}>
//   <FormTitle>Login</FormTitle>
//   <InputField>
//     <EmailIco />

//     <input type="text" placeholder="Usuário" {...register('username')}
//     />
//   </InputField>
//   <ErrorMessage>{errors.username?.message ?? ''}</ErrorMessage>

//   <InputField>
//     <PassIco />
//     <input type="password" placeholder="Senha" {...register('password')} />
//   </InputField>
//   <ErrorMessage>{errors.password?.message ?? ''}</ErrorMessage>

//   <ButtonGroup>
//     <ButtonNormal type='submit'>Entrar</ButtonNormal>
//     <ButtonNormal onClick={() => navigate('/signup')} >Cadastro</ButtonNormal>
//     <ButtonWarm onClick={() => alert('Serviço não implementado')} >Recuperar senha</ButtonWarm>
//   </ButtonGroup>
// </FormContainer>
export default Login;
