import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  //cart stuff
  const [cartProducts, setCartProducts] = useState([]);
  //ska läggas till på produkt card på en button (onClick={addProductToCart})
  const addProductToCart = (product) => {
    const newProduct = { ...product, quantity: 1 };
    setCartProducts([...cartProducts, newProduct]);
  };

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
      <div className="products-container-1">
        {products.map(
          (
            product //using map to go through the array and display products within html elements
          ) => (
            <div className="products-container-2" key={product.id}>
              <img src={product.imageURL}></img>
              <h3>{product.name}</h3>
              {/* <p>{product.description}</p> */}
              <p>
                PRICE: <span>{product.price} kr</span>
              </p>
              <h4>
                <Link to={`/products/${product._id}`}>Details</Link>
              </h4>
              <button onClick={() => addProductToCart(product)}>Add to cart</button>
            </div>
          )
        )}
      </div>
    </>
  );
};
export default Products;
