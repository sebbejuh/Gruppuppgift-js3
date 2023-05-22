import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Navbar from './components/Navbar'

import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Products from './pages/Products'
import Cart from './pages/Cart'

const App = () => {
  return (
    <>
    <Navbar/>
    <div className='container'>
        <Routes>
            <Route index element={<Home/>} />
            <Route path='login' element={<Login/>} />
            <Route path='register' element={<Register/>} />
            <Route path='products' element={<Products/>} />
            <Route path='cart' element={<Cart/>} />
        </Routes>
    </div>
    </>
  )
}

export default App