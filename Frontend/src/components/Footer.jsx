import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaHotjar } from "react-icons/fa";


const footer = () => {
  return (
    <div>
    <footer class="footer">
     <div class="footer-container">
      <div class="footer-row">
      <div class="footer-copyright">
          <h4>Copyright © <FaHotjar/>Fruits</h4>
          
        </div>
        <div class="footer-col">
          <h4>get help</h4>
          <ul>
            <li><NavLink to="/cart">shipping</NavLink></li>
            <li><NavLink to="/cart">order status</NavLink></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>online shop</h4>
          <ul>
            <li><NavLink to="/products">Fruits</NavLink></li>
            <li><NavLink>Fruit Details</NavLink></li>
          </ul>
        </div>
      </div>
     </div>
  </footer>
    </div>
  )
}

export default footer