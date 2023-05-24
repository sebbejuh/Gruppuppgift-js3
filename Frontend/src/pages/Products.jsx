import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

const Products = () => {
    const [products, setProducts] = useState([]); //using useState hook to create products state variable as an array

    useEffect(() => {
        //using hook
        fetch("http://localhost:7777/api/products/") //using fetch to get all products
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

  return (
    <>
      <div className='products-container-1'>
          {products.map(product => (      //using map to go through the array and display products within html elements
            <div className='products-container-2' key={product.id}>
              <img src={product.imageURL}></img>
              <h3>{product.name}</h3>
              {/* <p>{product.description}</p> */}
              <p>PRICE: <span>{product.price} kr</span></p>
              <h4><Link to={`/products/${product._id}`}>Details</Link></h4>
            </div>
          ))
          }
      </div>
    </>
  );
}
export default Products