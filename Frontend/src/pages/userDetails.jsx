import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const UserDetails = () => {
    const [orders, setOrders] = useState([]);
    const { token } = useContext(AuthContext); //getting token
    const navigate = useNavigate();

    useEffect(() => {
        if (token == null) {
            //if token is null / user not logged in - redirect to homepage
            navigate("/");
        }

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
            } catch (error) {
                console.log("Error fetching orders", error);
            }
        };
        fetchOrders();
    }, [token]);
    // console.log(orders)
    return (
        <>
            <div className="user-container-1">
                <h1>Your Orders</h1>
                {orders.map((order) => (
                    <div className="user-container-2" key={order._id}>
                        <h3 className="user-orderId">
                            Order Number: <span>{order._id}</span>
                        </h3>
                        {/* <h3 className='user-userId'>Your user ID: <span>{order.user}</span></h3> */}
                        <h3 className="user-status">
                            Order Status: <span>{order.status.status}</span>
                        </h3>
                        {order.orderRows.map((orderRow) => (
                            <div className="user-productInfo" key={orderRow._id}>
                                <p>
                                    {orderRow.quantity} {orderRow.product.name}s at{" "}
                                    {orderRow.product.price}kr per
                                </p>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </>
    );
};

export default UserDetails;
