import React from "react";
import { useNavigate } from "react-router-dom";
import Nome from "../Components/name";


function Home() {
    const navigate = useNavigate()


    const VoltarLogin = () => {
        return navigate("/")
    }

    const ContadorPath = () => {
        return navigate("/contador")
    }

    const ProfileCardPath = () => {
        return navigate("/profile")
    }


    return (
        <div>
            <h1>Tela Teste</h1>

            <h1>Voltar para a Pagina de login</h1>
            <button onClick={VoltarLogin}>Voltar</button>
            

            <h1>Contador Simples com Props</h1>
            <button onClick={ContadorPath}>Go</button>

            <h1>Profile Card</h1>
            <button onClick={ProfileCardPath}>Go</button>

        </div>
    )
}

export default Home;