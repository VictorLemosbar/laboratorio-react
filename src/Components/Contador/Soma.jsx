const Soma = ({ onChange }) => {

    return (
        <div>
            <button  className= "btn" onClick={() => onChange(1)}>Somar</button>
        </div>
    )
}


export default Soma;