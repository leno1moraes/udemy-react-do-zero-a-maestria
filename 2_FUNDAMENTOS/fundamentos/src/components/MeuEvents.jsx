const MeuEvents = () => {
    const handleMyPrimeiroEvento = (e) =>{
        console.log("Ai que gostoso! Vou escrever no navegador");
        alert("Ai que gostoso de novo! Agora estou na tela");
    };

    const rederizaEssaPorra = (x) =>{
        if (x){
            return <h1>Renderizou em verdadeiro</h1>;
        }else{
            return <h1>Renderizou em falso</h1>;
        }
    };

    return (
        <div>
            <div>
                <button onClick={handleMyPrimeiroEvento}>Clique em mim</button>
            </div>
            {rederizaEssaPorra(true)}
            {rederizaEssaPorra(false)}
        </div>
    );
};

export default MeuEvents;