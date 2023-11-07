import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'


const Product = () => {
    
    const [product, setProduct] = useState([]);

    const { id } = useParams();
    const url = "http://0.0.0.0:8001/products/" + id;

    //return data
    useEffect(() => {
    async function fetchData() {
        const rest = await fetch(url);

        const data = await rest.json();

        setProduct(data);      
    }
    fetchData();
    }, []);  

  return (
    <>
        <div>
            <p><b>ID:</b> {product.id} </p>
            <p><b>Identificador do produto:</b> {id} </p>            
            <p><b>Descrição:</b> {product.name} </p>
            <p><b>Preço:</b>R$ {product.price} </p>
        </div>
        
    </>
  )
}

export default Product