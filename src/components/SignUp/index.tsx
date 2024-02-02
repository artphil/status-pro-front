import { useState } from 'react';
import { useNavigate } from 'react-router';
import apiAuth from 'services/apiAuth';

import { ReactComponent as EmailIco } from 'assets/icons/email.svg';
import { ReactComponent as PassIco } from 'assets/icons/pass.svg';
import { ReactComponent as UserIco } from 'assets/icons/user.svg';
import { LoginButtonNormal, LoginButtons, LoginContainer, LoginField, LoginTitle, StyledLink } from './stlyle';

function SignUp() {
  const [form, setForm] = useState({name: '', nickname: '', email: '', password: '', confirmPassword: ''});
  const navigate = useNavigate();

  function handleForm(e: any){
    setForm({...form, [e.target.name]: e.target.value});
  }

  function handleSignUp(e: any){
    e.preventDefault();

    apiAuth.signUp(form)
      .then( res => {
        localStorage.setItem('token', form.name);
        navigate('/');
      })
      .catch( err => {
        alert(err.response.data);
      });
  }

  return (
    <LoginContainer onSubmit={handleSignUp}>
      <LoginTitle>Cadastro</LoginTitle>
      <LoginField>
        <UserIco />
        <input 
          type="text" 
          name="name"
          required
          placeholder="Nome"
          value={form.name}
          onChange={handleForm} />
      </LoginField>
      <LoginField>
        <UserIco />
        <input 
          type="text" 
          name="nickname"
          required
          placeholder="NIckname"
          value={form.nickname}
          onChange={handleForm} />
      </LoginField>
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
      <LoginField>
        <PassIco />
        <input 
          name="confirmPassword"
          placeholder="Repetir a senha" 
          type="password" 
          required
          value={form.confirmPassword}
          onChange={handleForm}
        />
      </LoginField>
      <LoginButtons>
        <LoginButtonNormal>Cadastrar</LoginButtonNormal>
        <StyledLink to='/login'>Já possui conta? Clique aqui para fazer login</StyledLink>
        {/* <LoginButtonNormal onClick={() => navigate('/login')} >Fazer login</LoginButtonNormal> */}
      </LoginButtons>
    </LoginContainer>
  );
}

export default SignUp;