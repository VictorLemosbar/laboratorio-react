const Soma = ({ onChange }) => {

    return (
        <div>
            <button onClick={() => onChange(1)}>Somar</button>
        </div>
    )
}


export default Soma;