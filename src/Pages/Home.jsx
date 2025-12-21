import React from "react";
import "./Home.css"
import { useNavigate } from "react-router-dom";


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

    const BookShelfPath = () => {
        return navigate("/books")
    }



    return (
        <div className="pages-container">
            <div className="pages">
                <div>Home</div>

                <div>
                    <h1>Voltar para a Pagina de login</h1>
                    <button onClick={VoltarLogin}>Voltar</button>
                </div>
                <div>
                    <h1>Atividades Simples</h1>
                    <button className="btn" onClick={ContadorPath}>Go</button>
                </div>
                <div>
                    <h1>Profile Card</h1>
                    <button className="btn" onClick={ProfileCardPath}>Go</button>
                </div>

                <div>
                    <h1>Books</h1>
                    <button className="btn" onClick={BookShelfPath}>Go</button>
                </div>
            </div>
        </div>
    )
}

export default Home;