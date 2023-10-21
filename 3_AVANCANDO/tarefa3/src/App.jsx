import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

/**Meus proprios compenentes */
import Aot1 from "./assets/imagem002.jpg"
import GerenciarDados from './components/GerenciarDados'
import ListaDados from './components/ListaDados'
import CondicionalDados from './components/CondicionalDados'
import PrimeiroPropsDados from './components/PrimeiroPropsDados'
import SegundoPropsDados from './components/SegundoPropsDados'
import FragmentoDados from './components/FragmentoDados'
import ContainerDados from './components/ContainerDados'
import UseDetails from './components/UseDetails'

function App() {
  const [count, setCount] = useState(0)

  const carros =[
    {id: 1, marca: "Ferrari", cor: "Vermelha", km: 6000},
    {id: 2, marca: "Honda", cor: "Amarela", km: 4000},
    {id: 3, marca: "Mercedes", cor: "Branco", km: 5000},
  ];

  const pessoas = [
    {id: 1, nome: "Carol", idade: 27, profissao: "Programadora"},
    {id: 2, nome: "Maria", idade: 31, profissao: "Analista"},
    {id: 3, nome: "Joana", idade: 16, profissao: "Cientista de dados"},
    {id: 4, nome: "Mariana", idade: 19, profissao: "Desgin"},
    {id: 5, nome: "Fernanda", idade: 17, profissao: "Devops"},
    {id: 6, nome: "Janet", idade: 19, profissao: "Gerente"},
  ];

  return (
    <>
      <h1>Seção 3</h1><h2>Avançando em React</h2>

      {/* Imagem em public */}
      <div>
        <img src="/imagem001.jpg" alt="Attack on Titan Banner 1" />
      </div>

      {/* Imagem em asset */}
      <div>
        <img src={Aot1} alt="" />
      </div>
      
      <hr></hr>
      <GerenciarDados />
      
      <hr></hr>
      <ListaDados />
      
      <hr></hr>
      <CondicionalDados />
      
      <hr></hr>
      {/**usando props */}
      <PrimeiroPropsDados nome="Leno Moraes" />
      
      <hr></hr>
      {/**usando props com destruction*/}
      <SegundoPropsDados marca="Audi" km={1200} cor="Preto" />

      <hr></hr>
      {/**reaproveitando dados*/}
      <SegundoPropsDados marca="Fiat" km={420} cor="Branco" />
      
      <hr></hr>
      {/**Lista de carros*/}      
      {carros.map((carro) =>(
        <SegundoPropsDados key={carro.id} marca={carro.marca} km={carro.km} cor={carro.cor} />
        ))
      }

      <hr></hr>
      {/**Fragmentos*/}       
      <FragmentoDados />

      <hr></hr>
      {/**Container*/}       
      <ContainerDados meuValor="TESTANDO">
        <p>Conteúdo fora</p>
      </ContainerDados>

      <hr></hr>
      {/**Tarefa 4 */}
      {pessoas.map((pessoa) => (
          <UseDetails key={pessoa.id} nome={pessoa.nome} idade={pessoa.idade} profissao={pessoa.profissao} />
        ))
      }

      {/**Olá agluma coisa de teste */}
    </>
  )
}

export default App
