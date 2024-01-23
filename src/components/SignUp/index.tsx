import { useState } from "react";
import { useNavigate } from "react-router";

import { ReactComponent as EmailIco } from "assets/icons/email.svg";
import { ReactComponent as PassIco } from "assets/icons/pass.svg";
import { ReactComponent as UserIco } from "assets/icons/user.svg";

import { ButtonNormal, ButtonGroup, FormContainer, InputField, FormTitle } from "../Login/stlyle";


function SignUp() {
  const [userName, setUserName] = useState("");

  const navigate = useNavigate();

  function login() {
    localStorage.setItem("token", userName);
    navigate("/");
  }

  return (
    <FormContainer>
      <FormTitle>Cadastro</FormTitle>
      <InputField>
        <UserIco />
        <input type="text" placeholder="Nome"
          onChange={event => setUserName(event.target.value)} />
      </InputField>
      <InputField>
        <EmailIco />
        <input type="text" placeholder="Email"
          onChange={event => setUserName(event.target.value)} />
      </InputField>
      <InputField>
        <PassIco />
        <input type="password" placeholder="Senha" />
      </InputField>
      <InputField>
        <PassIco />
        <input type="password" placeholder="Repetir a senha" />
      </InputField>
      <ButtonGroup>
        <ButtonNormal onClick={login} >Enviar</ButtonNormal>
        <ButtonNormal onClick={() => navigate("/login")} >Fazer login</ButtonNormal>
      </ButtonGroup>
    </FormContainer>
  );
}

export default SignUp;