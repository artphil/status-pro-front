import { useState } from 'react';
import { useNavigate } from 'react-router';
import apiAuth from 'services/apiAuth';

import { ReactComponent as EmailIco } from 'assets/icons/email.svg';
import { ReactComponent as PassIco } from 'assets/icons/pass.svg';

import { LoginButtonNormal, LoginButtons, LoginContainer, LoginField, LoginTitle, } from './stlyle';
import { StyledLink } from 'components/SignUp/stlyle';


function Login() {
  const [form, setForm] = useState({email: '', password: ''});
  const navigate = useNavigate();

  function handleForm(e: any){
    setForm({...form, [e.target.name]: e.target.value});
  }

  function handleSignUp(e: any){
    e.preventDefault();

    apiAuth.signIn(form)
      .then( res => {
        localStorage.setItem('token', 'nome qualquer');
        navigate('/');
      })
      .catch( err => {
        alert(err.response.data);
      });
  }

  return (
    <LoginContainer onSubmit={handleSignUp}>
      <LoginTitle>Login</LoginTitle>
      <LoginField>
        <EmailIco />
        <input 
          name="email"
          placeholder="Email"
          type="email" 
          required
          value={form.email}
          onChange={handleForm} />
      </LoginField>
      <LoginField>
        <PassIco />
        <input 
          name="password"
          placeholder="Senha"
          type="password" 
          required
          value={form.password}
          onChange={handleForm}
        />
      </LoginField>
      <LoginButtons>
        <LoginButtonNormal>Entrar</LoginButtonNormal>
        <StyledLink to='/login'>Já possui conta? Clique aqui para fazer login</StyledLink>
        {/* <LoginButtonWarm onClick={() => alert('Serviço não implementado')} >Recuperar senha</LoginButtonWarm> */}
      </LoginButtons>
    </LoginContainer>
  );
}

export default Login;