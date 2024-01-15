import { useState } from "react";
import { LoginContainer, LoginTitle } from "./stlyle";


function Login() {
    const [userName, setUserName] = useState("");

    function login() {
        localStorage.setItem('token', userName)
        window.location.reload()
    }

    return (
        <LoginContainer>
            <LoginTitle>Login</LoginTitle>
            <input type="text" placeholder="login"
                onChange={event => setUserName(event.target.value)} />
            <input type="password" placeholder="senha" />
            <button
                onClick={login}
            >Entrar</button>
        </LoginContainer>
    );
}

export default Login;