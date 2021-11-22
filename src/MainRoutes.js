import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Auth from './components/Auth/Auth'
import Cart from './components/Cart/Cart'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import ProductDetails from './components/Products/ProductDetails'
import AuthContextProvider from './contexts/AuthContext'
import ProductsContextProvider from './contexts/ProductsContext'

const MainRoutes = () => {
  return (
    <AuthContextProvider>
      <ProductsContextProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/:id" element={<ProductDetails />} />
          </Routes>
        </BrowserRouter>
      </ProductsContextProvider>
    </AuthContextProvider>
  )
}

export default MainRoutes
