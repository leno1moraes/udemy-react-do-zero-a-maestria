import React from 'react'

const SegundoPropsDados = ({marca, km, cor}) => {
  return (
    <div>
        <h4>SegundoPropsDados</h4>
        <ul>
            <li><b>Marca:</b> {marca} </li>
            <li><b>KM:</b> {km}</li>
            <li><b>Cor:</b> {cor}</li>
        </ul>
    </div>
  )
}

export default SegundoPropsDados