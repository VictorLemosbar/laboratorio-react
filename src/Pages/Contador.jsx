import { useState } from "react";
import Soma from "../Components/Contador/Soma";
import Sub from "../Components/Contador/Subtração";

const Contador = () => {

    const [contador, setContador] = useState(0)

    const aumentarContador = (valor) => {
        setContador(contador + valor)
    }

    const diminuirContador = (valor) => {
            setContador(contador - valor)
 
    }
    

    return (

        <div>
        <Sub onChange={diminuirContador}/>

        <Soma onChange={aumentarContador}/>


        <p>{contador}</p>
        </div>
    )
}

export default Contador;