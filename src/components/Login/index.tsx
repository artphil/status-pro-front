import { useState } from "react";

import { ReactComponent as EmailIco } from 'assets/icons/email.svg';
import { ReactComponent as PassIco } from 'assets/icons/pass.svg';

import { LoginButtonNormal, LoginButtonWarm, LoginButtons, LoginContainer, LoginField, LoginTitle } from "./stlyle";


function Login() {
    const [userName, setUserName] = useState("");

    function login() {
        localStorage.setItem('token', userName)
        window.location.reload()
    }

    return (
        <LoginContainer>
            <LoginTitle>Login</LoginTitle>
            <LoginField>
                <EmailIco />

                <input type="text" placeholder="Usuário"
                    onChange={event => setUserName(event.target.value)} />
            </LoginField>
            <LoginField>
                <PassIco />
                <input type="password" placeholder="Senha" />
            </LoginField>
            <LoginButtons>
                <LoginButtonNormal onClick={login} >Entrar</LoginButtonNormal>
                <LoginButtonNormal onClick={()=> alert('Serviço não implementado')} >Cadastro</LoginButtonNormal>
                <LoginButtonWarm onClick={()=> alert('Serviço não implementado')} >Recuperar senha</LoginButtonWarm>
            </LoginButtons>
        </LoginContainer>
    );
}

export default Login;