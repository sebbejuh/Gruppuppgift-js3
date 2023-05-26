import { useContext, useEffect, useState } from 'react';
import { AuthContext } from "../context/AuthContext";

const UserDetails = () => {
    const [orders, setOrders] = useState([]);
    const { token } = useContext(AuthContext);
    
    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const res = await fetch("http://localhost:7777/api/orders/", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                const data = await res.json();
                if (data) {
                    setOrders(data);
                }
            } catch (error){
                console.log('Error fetching orders', error);
            }
        };
        fetchOrders ()
    }, [token]);
    console.log(orders)
  return (
    <>
      <div className='products-container-1'>
          {orders.map(order => (
            <div className='products-container-2' key={order.id}>
              <h2>{order.user}</h2>
              <h3>{order.status.status}</h3>
            </div>
          ))
          }
      </div>
    </>
  );
  }
  
  export default UserDetails