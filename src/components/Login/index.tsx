import { useState } from 'react';
import { useNavigate } from 'react-router';
import apiAuth from 'services/apiAuth';
import { PulseLoader } from 'react-spinners';
import { Container, LoginTitle, LoginField, StyledLink, LoginButton, LoginContainer, EmailIcon, PassIcon } from 'components/SignUp/style';


function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

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
            onChange={shandleForm} />
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

export default Login;
