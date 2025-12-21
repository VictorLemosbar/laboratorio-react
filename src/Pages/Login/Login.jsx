import React from "react";
import { useNavigate } from "react-router-dom";


function Login() {

    const navigate = useNavigate("")

    const login = () => {
        return navigate("/home")
    }

    return (
        <div>
            <h1>Tela teste Login</h1>
            <button className="btn" onClick={login}>Entrar</button>
        </div>

    )
}

export default Login;


