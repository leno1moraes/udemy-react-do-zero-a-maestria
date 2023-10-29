import './App.css'
import Teste from './components/Teste'

function App() {
  const n = 2;
  const estiloTeste = false;

  return (
    <>
      {/** CSS GLOBAL */} 
      <p>Iniciando projeto</p>
      <br />
      <hr />
      <h2>Título h2 de teste</h2>
      <br />
      <hr />
      <button >botão de teste</button>
      <br />
      <hr />   
      {/** CSS de componente */}  
      <Teste />
      <br />
      <hr />   
      {/** CSS inline*/}  
      <p style={{ color: "blue", fontFamily: "fantasy", fontSize: "25px", fontWeight: "bold"}}>Parágrafo de teste</p>      
      <br />
      <hr />   
      {/** CSS inline ternario (com if)*/}       
      <h2 style={n < 5 ? {color: "yellow", background: "red"} : {color: "red", background: "yellow"} }>Outro título de teste</h2>
      <br />
      <hr />   
      {/** CSS classe dinamica*/}     
      <p className={estiloTeste ? "estilo-de-teste-1" : "estilo-de-teste-2"}>Algum outro de teste aqui</p>    

    </>
  )
}

export default App
