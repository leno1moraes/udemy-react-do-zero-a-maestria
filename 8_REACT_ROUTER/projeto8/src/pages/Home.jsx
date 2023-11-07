import { useState, useEffect } from 'react'
import React from 'react'

//url get datas from database or service
const url = "http://0.0.0.0:8001/products";

//import icons
import EditIcon from '../../src/assets/icons/edit2.png';
import DeleteIcon from '../../src/assets/icons/delete1.png';

const Home = () => {

    const [products, setProducts] = useState([]);

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
  
    //1 - return data
    useEffect(() => {
      async function fetchData() {
        const rest = await fetch(url);
  
        const data = await rest.json();
    
        setProducts(data);      
      }
      fetchData();
    }, []);
  
    //2 - add data
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const product = {
        name,
        price,
      };
  
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type" : "application/json",
        },
        body: JSON.stringify(product),
      });
  
      //2-1 Loading dynamic
      const addedProduct = await res.json();
      setProducts((prevProducts) => [...prevProducts, addedProduct]);
      setName("");
      setPrice("");
    }
  
    const handleDelete = async (productId) => {
  
      try {
  
        const apiUrl = `${url}/${productId}`;
  
        const res = await fetch(apiUrl, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        });
        
        if (res.ok) {
          alert("Deletado com sucesso");
          setProducts((prevProducts) =>
            prevProducts.filter((product) => product.id !== productId)
          );
        } else {
          alert("Falha ao deletar");
        }      
  
      } catch (error) {
        //console.error("Error:", error);
        alert("Falha ao deletar");
      }
  
    }

  return (
    <>
        <div className='form-base'>
          <form className='form-product' onSubmit={handleSubmit}>
            <label><span>Produto</span>
            <input type="text" value={name} name='name' onChange={(e) => setName(e.target.value)} required />  
            </label>   

            <label><span>Valor</span>
            <input type="number" value={price} name='price' onChange={(e) => setPrice(e.target.value)} required />  
            </label>                 

            <input className='btnSubmit' type="submit" value="Gravar" />
          </form>
        </div>

        <div className='list-base'>
          <table className='list'>
            <thead> 
              <tr>
                <th>Produto</th>
                <th>Valor</th>
                <th colSpan='2'>Ação</th>              
              </tr>
            </thead> 
            <tbody>
              {
                products.map((product) => (
                <tr key={product.id}>
                  <td><span className='spNameProduct'>{product.name}</span></td>
                  <td><span className='spPriceProduct'>{product.price}</span></td>
                  <td><a href={`localhost/edita/${product.id}`} > <img src={EditIcon} alt="editIcon" width='20px' height='20px'/> </a> </td>
                  <td> <img src={DeleteIcon} alt="editIcon" width='20px' height='20px' onClick={() => handleDelete(product.id)}/> </td>             
                </tr>                  
                ))
              }  
            </tbody>                             
          </table>
        </div>    
    </>
  )
}

export default Home