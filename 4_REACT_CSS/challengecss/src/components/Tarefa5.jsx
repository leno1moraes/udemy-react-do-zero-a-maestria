import React from 'react'
import './Tarefa5.css'

/**Imagens */
import Carro from "../assets/carros/corrola5.png"

const Tarefa5 = () => {
  return (
    <>
    <div className='container'>
    <div className="my-panel-1">
        <h2>Espeficiações do Carro</h2>

        <div>
            <h4 className="my-title">ESTILO</h4>
            <ul className="my-list">
                <li>Acabamento interno com partes revestidasde couro e partes revestidas de material sintético na cor preta</li>
                <li>Acabamento do volante em couro na cor preta</li>
                <li>Acabamento Black Piano na grade inferior dianteira.</li>
                <li>Difusores de ar com acabamento na cor prata</li>
                <li>Faróis e lanternas de LED com acendimento automático</li>
                <li>Lanternas dianteiras com luzes diurnas (Daytime Running Lights – DRL mode)</li>
                <li>Painel de instrumentos com tela TFT ⁸ de 12,3 pol. digital e colorido</li>
                <li>Rodas de liga leve 17”com acabamento na cor preto brilhante</li>
            </ul>     
        </div>

        <div>
            <h4 className="my-title">CONFORTO/CONVENIÊNCIA</h4>
            <ul className="my-list">
                <li>Ar-condicionado integrado frio e quente automático, digital e com filtro antipólen</li>
                <li>Banco do motorista com regulagem para seis ajustes: altura, distância e inclinação</li>
                <li>Computador de bordo com visor multifunção (tela TFT8 de 12,3” de alta resolução)</li>
                <li>Controle de Velocidade de Cruzeiro Adaptativo (ACC5)</li>
                <li>Espelho retrovisor interno com antiofuscamento eletrocrômico</li>
                <li>Espelhos retrovisores externos eletrorretráteis com indicador de direção e regulagem elétrica</li>
                <li>Indicador de direção econômica no painel de instrumentos (Hybrid System)</li>
            </ul>          
        </div>   

        <div>
            <h4 className="my-title">SEGURANÇA</h4>
            <ul className="my-list">
                <li>Air bag de joelho (um): motorista</li>
                <li>Air bags de cortina (dois): sistemas com duas bolsas cada</li>
                <li>Air bags frontais (dois): motorista e passageiro dianteiro</li>
                <li>Air bags laterais (dois): motorista e passageiro dianteiro</li>
                <li>Controle Eletrônico de Estabilidade Veicular (VSC 11)</li>
                <li>Controle Eletrônico de Tração (TRC12)</li>
                <li>Farol alto automático (AHB)</li>
                <li>Faróis de neblina dianteiros de LED9</li>
            </ul>         
        </div>   

    </div>     

    <div className='my-panel-2'>
        <img className='car-image' src={Carro} alt='Imagem do carro'/>
    </div>

    </div>
    </>
  )
}

export default Tarefa5