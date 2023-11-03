import { useState } from 'react'
import './App.css'

//import icons
import EditIcon from '../src/assets/icons/edit2.png';
import DeleteIcon from '../src/assets/icons/delete1.png';

function App() {

  return (
    <>
      <div>
        <div className='form-base'>
          <form className='form-product'>
            <label><span>Produto</span>
            <input type="text" name='produto' required />  
            </label>   

            <label><span>Valor</span>
            <input type="text" name='preco' required />  
            </label>                 

            <input className='btnSubmit' type="submit" value="Gravar" />
          </form>
        </div>

        <div className='list-base'>
          <table className='list'>
            <tr>
              <th>Produto</th>
              <th>Valor</th>
              <th colSpan='2'>Ação</th>              
            </tr>
            <tr>
              <td>Camisa 1</td>
              <td>R$ 10,53</td>
              <td><img src={EditIcon} alt="editIcon" width='20px' height='20px'/></td>
              <td><img src={DeleteIcon} alt="editIcon" width='20px' height='20px'/></td>             
            </tr>
            <tr>
              <td>Camisa 2</td>
              <td>R$ 10,53</td>
              <td><img src={EditIcon} alt="editIcon" width='20px' height='20px' /></td>
              <td><img src={DeleteIcon} alt="editIcon" width='20px' height='20px'/></td>            
            </tr>
            <tr>
              <td>Camisa 3</td>
              <td>R$ 10,53</td>
              <td><img src={EditIcon} alt="editIcon" width='20px' height='20px'/></td>
              <td><img src={DeleteIcon} alt="editIcon" width='20px' height='20px'/></td>             
            </tr>  
            <tr>
              <td>Camisa 4</td>
              <td>R$ 10,53</td>
              <td><img src={EditIcon} alt="editIcon" width='20px' height='20px'/></td>
              <td><img src={DeleteIcon} alt="editIcon" width='20px' height='20px'/></td>              
            </tr>                                  
          </table>
        </div>


      </div>
    </>
  )
}

export default App
