import React from "react";
import { useNavigate } from "react-router-dom";

import Nome from "../Components/name";

function Login() {

    const navigate = useNavigate("")

    const login = () => {
        return navigate("/home")
    }

    return (
        <div>
            <h1>Tela teste Login</h1>
            <button onClick={login}>Entrar</button>
            <Nome />
        </div>

    )
}

export default Login;


