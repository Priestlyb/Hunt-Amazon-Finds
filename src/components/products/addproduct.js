import { AxiosInstance } from '../../config';
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";


const Addproduct = () => {
    const history = useNavigate(); 
    const [inputs, setInputs] = useState({
        image: '',
        title: '',
        description: '',
        price: '',
        link: '',
    });
    
    const handleChange = (e) => {
      setInputs((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value
      }))
   console.log(e.target.name, "value", e.target.value);
    };
    const sendRequest = async () => {
      AxiosInstance.post("/products", {
        image: String(inputs.image),
        title: String(inputs.title),
        description: String(inputs.description),
        price: Number(inputs.price),
        link: String(inputs.link),
      }).then(res=> res.data);
    }
  
     const handleSubmit = (e) => {
      e.preventDefault();
      console.log(inputs);
      sendRequest().then(()=>history("/"));
     }

  return (
    <div className='container addproduct'>

    <a href='/admin' className='admin_back'>
    <button className='back_admin'>
    Back here
    </button>
    </a>
    
        <form className='row' onSubmit={handleSubmit}>
            <input className='input col-lg-6' value={inputs.image} onChange={handleChange} name="image" placeholder='Image' />
            <input className='input col-lg-6' value={inputs.title} onChange={handleChange} name="title" placeholder='Title' />
            <input className='input col-lg-6' value={inputs.description} onChange={handleChange} name="description" placeholder='Description' />
            <input className='input col-lg-6' value={inputs.price} onChange={handleChange} name="price" placeholder='price' />
            <input className='input col-lg-12' value={inputs.link} onChange={handleChange} name="link" placeholder='Link' />
            <button className='add_btn' type="submit">Add Product</button>
        </form>
    </div>
  )
}

export default Addproduct