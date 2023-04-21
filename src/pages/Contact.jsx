import React from 'react';

import "./pages.css";
import "../components/components.css"
import { Navbar, Footer } from "../components";

const Contact = () => {
    return (
        <>
            <Navbar />
            <div className='contact_container'>
                <div>
                    <h1 className='contact'>Contact Us</h1>
                </div>
                <h4>Call us to learn more</h4>
                <div className='contact_content'>
                    <p className='paragraph'>Kakinada Super</p>

                    Venkat Chinta <br />

                    <p className='paragraph'> Email</p>
                    venkatchinta75@gmail.com

                </div>
            </div>
            <Footer />
        </>
    )
}

export default Contact