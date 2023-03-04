import { AxiosInstance } from '../../config';
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const Updateproduct = (props) => {
  const history = useNavigate();
  const [inputs, setInputs] = useState({})
  const id = useParams().id;
  useEffect(() => {
    const fetchHandler = async () => {
      await AxiosInstance
        .get(`/products/${id}`)
        .then((res) => res.data)
        .then(data => setInputs(data.product));
    };
    fetchHandler();
  }, [id]);

  const sendRequest = async () => {
    AxiosInstance.put(`/products/${id}`, {
      title: String(inputs.title),
      description: String(inputs.description),
      price: String(inputs.price),
      image: String(inputs.image),
      link: String(inputs.link),
    }).then(res => res.data);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    sendRequest().then(() => history(`/`));
  }

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
    //  console.log(e.target.name, "value", e.target.value);
  };


  return (
    <div className='container product_update'>

      <a href='/admin' className='admin_back'>
      <button className='back_admin'>
      Back here
      </button>
      </a>

      {inputs &&
        <form className='row' onSubmit={handleSubmit} >

          <div className='col-lg-6'>
            <input placeholder="title" className="input" value={inputs.title} onChange={handleChange} name="title" />
          </div>

          <div className='col-lg-6'>
            <input placeholder="image" className="input" value={inputs.image} onChange={handleChange} name="image" />
          </div>

          <div className='col-lg-6'>
            <input placeholder="price" className="input" value={inputs.price} onChange={handleChange} name="price" />
          </div>

          <div className='col-lg-6'>
            <input placeholder="link" className="input" value={inputs.link} onChange={handleChange}
              name="link" />
          </div>

          <div className='col-lg-12'>
            <textarea placeholder='Description' className="textarea" value={inputs.description} onChange={handleChange} name="description" />
          </div>
          <div className='col-lg-12'>

            <button className='contact_btn' type="submit"><span className="text">Change_project</span><span>Nice!</span></button>

          </div>
        </form>
      }
    </div>
  )
}

export default Updateproduct