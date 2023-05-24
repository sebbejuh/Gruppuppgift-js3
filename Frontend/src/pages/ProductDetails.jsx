import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {Link} from 'react-router-dom';
import { NavLink } from 'react-router-dom'
import { FaHotjar } from "react-icons/fa";

const ProductDetails = () => {
    const {id} = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:7777/api/products/${id}`)
        .then(res => res.json())
        .then(data => {
          setProduct(data);
        })
        .catch(error => {
          console.error(error);
        });
    }, [id]);

    if (!product) {
        return <div>Loading...</div>
    }

    return (
    <>  
        <div className='details-banner'>
            <h1>SHOP</h1>
        </div>
        <div className='details-container-main'>
                <div className='details-container-1'>
                    <img src={product.imageURL}></img>
                </div>
                <div className='details-container-2'>
                    <div className='details-container-2-1'>
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>
                    </div>
                    <div className='details-container-2-2'>
                        <p>{product.price} kr</p>
                        <h4><Link to={`/`}>Add to Cart</Link></h4>
                    </div>
                </div>
        </div>
        <div>
    <footer className="footer">
     <div className="footer-container">
      <div className="footer-row">
      <div className="footer-copyright">
          <h4>Copyright © <FaHotjar/>Fruits</h4>
          
        </div>
        <div className="footer-col">
          <h4>get help</h4>
          <ul>
            <li><NavLink to="/cart">shipping</NavLink></li>
            <li><NavLink to="/cart">order status</NavLink></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>online shop</h4>
          <ul>
            <li><NavLink to="/products">Fruits</NavLink></li>
            <li><NavLink to="/products">Products</NavLink></li>
          </ul>
        </div>
      </div>
     </div>
  </footer>
    </div>
    </>
    )
  }
  
  export default ProductDetails