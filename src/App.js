import './index.css';
import React, { useContext } from 'react';
import Navbar from './components/navbar/navbar';
import Layout from './components/layout.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Addproduct from './components/products/addproduct';
import Updateproduct from './components/products/updateproduct';
import Footer from './components/footer/footer';
import Login from "./pages/login/Login";
import { Context } from "./context/Context";
import AdminPage from "./admin/admin-page";

function App() {
  const { user } = useContext(Context);
  return (
    <>
      < Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Layout />} />
          <Route path='/para32satalaya' element={user ? <Addproduct /> : <Login />} />
          <Route path='/updateproduct/:id' element={user ? <Updateproduct /> : <Login />} />
          <Route path="/admin" element={user ? <AdminPage /> : <Login />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
