import React from 'react'

import "./components.css";
import { Link } from 'react-router-dom';
import Logo from "../images/Logo.png"

const Footer = () => {
    return (
        <div className='footer_container'>
            <div className='footer1'>
                <img src={Logo} alt="app-logo" ></img>
                <div className='footer_list'>
                    <a href='#shop'>Shopping App</a>
                    <Link to="/contact">  <a href='#'>Contact Us</a></Link>
                    <Link to="./faq"><a href='#'>FAQ</a></Link>
                </div>
            </div>
            <div className='footer2'>
                <p>© Kakinada Super. Powered by <a href='https://www.esamudaay.com/'>eSamudaay</a></p>
                <div>
                    <Link to="/terms"><a href='#'>Terms</a></Link>
                    <Link to="./privacy"><a href='#'>Privacy</a></Link>
                </div>
            </div>
        </div>
    )
}

export default Footer