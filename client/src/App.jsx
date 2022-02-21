import React from 'react';
import {
  Home,
  ProductsList,
  SingleProduct,
  Register,
  Login,
  Cart,
} from './pages';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

const App = () => {
  const user = true;
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products/:category' element={<ProductsList />} />
        <Route path='/product/:id' element={<SingleProduct />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={user ? <Navigate to='/' /> : <Login />} />
        <Route
          path='/register'
          element={user ? <Navigate to='/' /> : <Register />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
