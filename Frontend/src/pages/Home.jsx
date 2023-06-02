import { NavLink } from "react-router-dom"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
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
        <div className="home-container-1">
        <div className="home-container-1-1">
            <h1>WELCOME TO FireFruits</h1>
            <p>Exclusive Fruits for every Fruitsalad.</p>
            <NavLink to={"/products"}>SHOP NOW </NavLink>
        </div>
        <div className="home-container-1-2">
        <img src="https://img.freepik.com/free-photo/delicious-healthy-snack-with-various-fruit_23-2148825029.jpg?w=1060&t=st=1684870732~exp=1684871332~hmac=1b2bb79f806f0894bfa6991e0dec0fbe464d0e1ccec9b8dd9c3877246f21d5d1" alt="Fruitsalad"></img>
        </div>
        </div>

        <div className='home-product-list'>
            <h1>Our Fruit Collection</h1>
        </div>
        <div className='products-container-1'>
        {products.map(product => (      //using map to go through the array and display products within html elements
            <div className='products-container-2' key={product._id}>
            <img src={product.imageURL}></img>
            <h3>{product.name}</h3>
            {/* <p>{product.description}</p> */}
            <p>
                PRICE: <span>{product.price} kr</span>
            </p>
            <h4>
                <Link to={`/products/${product._id}`}>Details</Link>
            </h4>
            </div>
        )
        )}
        </div>
        
    </>
  )
}

export default Home