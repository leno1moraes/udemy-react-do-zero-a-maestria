import React from 'react'

import { useState } from 'react'

const CondicionalDados = () => {

     const [x] = useState(false);

     const [nome] = useState("Joã");

  return (
    <div>
        <h4>CondicionalDados</h4>
        
        <div>
            <h5>Isso será exibindo?</h5>        
            {x && <p>Se x for true, sim !</p> }
            {!x && <p>Se x for false, não !</p> }
            { nome == "João" ? (
                <div>
                    <p>O nome é João</p>
                </div>
            ) : (
                <div>
                    <p>nome não encontrado</p>
                </div>                
            )}
        </div>
    </div>
  )
}

export default CondicionalDados