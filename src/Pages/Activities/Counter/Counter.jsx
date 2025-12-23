import { useState } from "react";

import Sum from "./Sum";
import Minus from "./Minus";

const Counter = () => {

    const [contador, setContador] = useState(0)

    const aumentarContador = (valor) => {
        setContador(contador + valor)
    }

    const diminuirContador = (valor) => {
            setContador(contador - valor)
 
    }
    

    return (

        <div>
        <Minus onChange={diminuirContador}/>

        <Sum onChange={aumentarContador}/>


        <p>{contador}</p>
        </div>
    )
}

export default Counter;