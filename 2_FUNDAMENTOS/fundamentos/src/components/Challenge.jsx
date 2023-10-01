const Challenge = () => {

    const valor1 = 4;
    const valor2 = 10;

    const handleMostraSoma = () =>{
        alert('Resultado: ' + (valor1 + valor2));
    }

    return (
        <div>
            <p>Primeiro valor: {valor1} </p>
            <p>Primeiro valor: {valor2} </p>
            <button onClick={handleMostraSoma}>Clique aqui para ver a soma desses dois valores</button>
        </div>
    );
};

export default Challenge;