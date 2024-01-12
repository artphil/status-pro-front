import { useState } from "react";


function Login() {
    const [userName, setUserName] = useState("");

    function login() {
        localStorage.setItem('token', userName)
        window.location.reload()
    }

    return (<div>
        <input type="text" placeholder="login"
            onChange={event => setUserName(event.target.value)} />
        <input type="password" placeholder="senha" />
        <button
            onClick={login}
        >Entrar</button>
    </div>);
}

export default Login;