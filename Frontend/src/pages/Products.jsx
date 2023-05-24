<<<<<<< HEAD
=======
import React, { useEffect, useState } from 'react';

>>>>>>> 7691f8f5deae4c44952e1f772b24791448b8966a
const Products = () => {
  const [products, setProducts] = useState([]); //using useState hook to create products state variable as an array

  useEffect(() => {                             //using hook
    fetch('http://localhost:7777/api/products/')//using fetch to get all products
      .then(res => res.json())
      .then(data => {
        setProducts(data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className='products-container-1'>
        {products.map(product => (      //using map to go through the array and display products within html elements
          <div className='products-container-2' key={product.id}>
            <img src={product.imageURL}></img>
            <h3>{product.name}</h3>
            {/* <p>{product.description}</p> */}
            <p>PRICE: <span>{product.price} kr</span></p>
            <a href='/'>Details</a>
          </div>
        ))

        }
    </div>
  );
}

export default Products