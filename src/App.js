import './index.css';
import React from 'react';
import Navbar from './components/navbar/navbar';
import Layout from './components/layout.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Addproduct from './components/products/addproduct';
import Updateproduct from './components/products/updateproduct';
import Footer from './components/footer/footer';

function App() {
  return (
    <>
      < Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Layout />} />
          <Route path='/para32satalaya' element={<Addproduct />} />
          <Route path='/updateproduct/:id' element={<Updateproduct />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
