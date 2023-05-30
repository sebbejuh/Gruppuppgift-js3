import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/shoppingCartSlice'



const ProductDetails = () => {

  const dispatch = useDispatch();

  const addProductToCart = () => {
    dispatch(addToCart(product));
  };


  const { id } = useParams();
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
    // console.log(product)
    if (!product) {
        return <div>Loading...</div>
    }

  return (
    <>
      <div className="details-banner">
        <h1>SHOP</h1>
      </div>
      <div className="details-container-main">
        <div className="details-container-1">
          <img src={product.imageURL}></img>
        </div>
        <div className="details-container-2">
          <div className="details-container-2-1">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
          </div>
          <div className="details-container-2-2">
            <p>{product.price} kr</p>
            <h4>
              <button className='add-cart' onClick={() => dispatch(addToCart(product))}>Add to cart</button>
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
