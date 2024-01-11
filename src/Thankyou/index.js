import React from 'react'
import './index.css'
import {FaCheck} from 'react-icons/fa'
const Thankyou = () => {
  return (
    <div className='thankyou-container'>
        <div className='icon-success'>
            <FaCheck className='success-icon'/>
        </div>
        <h1 className='thank-u-header'>Thank You</h1>

    </div>
  )
}

export default Thankyou