import { useEffect, useState } from "react";

const Form = () => {
    const [submit, setSubmit] = useState({
        cpf: "",
        name: "",
        passworld: ""
    })

    const [isNull, setIsNull] = useState(false)

    function handleSubmit(e) {
        e.preventDefault()

    }

    function validationNull() {
        if (submit.cpf == "" || submit.name == "" || submit.passworld == "") {
            setIsNull(true)
        }
    }
    function handleData(e) {

        const { name, value } = e.target

        setSubmit(prev => ({
            ...prev,
            [name]: value,
        }))

    }


    return (
        <form onSubmit={handleSubmit}>

            <input
                name="name"
                type="text"
                placeholder="Nome completo"
                value={submit.name}
                onChange={handleData}
            ></input>
            <input
                name="cpf"
                type="text"
                placeholder="CPF"
                value={submit.cpf}
                onChange={handleData}
            ></input>
            <input
                name="passworld"
                type="password"
                placeholder="Senha"
                value={submit.passworld}
                onChange={handleData}
            ></input>

            <button className="btn" onClick={validationNull}>Submit</button>

            {isNull && <span className="error-mensage">Preencha todos os campos!!</span>}

        </form>
    )


}

export default Form;