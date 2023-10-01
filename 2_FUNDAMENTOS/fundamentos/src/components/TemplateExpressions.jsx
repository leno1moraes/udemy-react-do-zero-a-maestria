const TemplateExpressions = () => {
    
    const name = "Fulano de Tal";
    const data = {
        age: 31,
        job: "Programer",
    };

    return (
        <div>
            <h2>Olá mundo do {name}</h2>
            <h2>A sua idade é {data.age}</h2>
            <h2>O cargo na empresa é {data.job}</h2>
            <p>Resultado do calculo: {4 + 4}</p>
            <p>Teste de impressão: {console.log("Testando 1 2 3")}</p>
        </div>
    );
};

export default TemplateExpressions;