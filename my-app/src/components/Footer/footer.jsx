import React from 'react'
import "./footer.css";
import designlogo from '../../assets/images/designlogo.svg'
import icons from '../../assets/images/icons.svg'
const Footer = () => {
  return (
    <div className='footer-bg-color'>
      <div className='container py-3 '>
        <div className='row text-white py-5'>


          <div className='col-md-3'>
            <img className='ms-4 mt-5' src={designlogo} width={70} alt="" />
            <p className='ms-4 mt-4'>2021 Award winning Vaccination and Lorem ipsum dolor sit amet</p>
            <img src={icons} className='ms-4 mt-3' width={160} alt="" />

          </div>


          <div className='col-md-3'>
            <h6 className='ms-5 mt-5'>Location</h6>
            
            <p className='ms-5 mt-4'>America</p>
            <p className='ms-5 mt-4'>Asia</p>
            <p className='ms-5 mt-2'>Europe</p>
            <p className='ms-5 mt-2'>Africa</p>

          </div>

          <div className='col-md-3'>
          <h6 className='ms-5 mt-5'>Contact</h6>
            
            <p className='ms-5 mt-4'>About Me</p>
            <p className='ms-5 mt-4'>Teams</p>
            <p className='ms-5 mt-2'>Profile</p>
            <p className='ms-5 mt-2'>FAQ</p>
          </div>

          <div className='col-md-3'>
          <h6 className='ms-5 mt-5'>Legals</h6>
            
            <p className='ms-5 mt-4'>Privacy</p>
            <p className='ms-5 mt-4'>Disclaimer</p>
            <p className='ms-5 mt-2'>Terms</p>
            <p className='ms-5 mt-2'>Company</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Footer;