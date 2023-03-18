import React from 'react'
import "./footer.css"
import logo from './logo-transparent.png'

function Footer() {
  return (
    <div className='footer'>

        <div className='row footer_row'>
            <div className='col_12 col-12'>
                <h2>How it works?</h2>
                <p>It’s Affiliating Marketing, for every purchase made by you, I get a commission from Amazon as a marketer.</p>
                <h1>Check out products & shop a lot!</h1>
            </div>
            </div>

            <div className='copyright row text-light' Style="background-color: #2D2727;">
            <div className='col-lg-6 text-center'>
                <img src={logo} alt='' className="mx-auto d-block" width="150px"  />
            </div>

            <div className='col_right_copyright col-lg-6'>
            <p className='text-center p-1'>Hunt Amazon FInds © 2022</p>
            </div>
        </div>

    </div>
  )
}

export default Footer