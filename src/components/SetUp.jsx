import React from 'react';

import "./components.css";
import { Link } from 'react-router-dom';
import Appimage from "../images/Appimage.png";

const SetUp = () => {
    return (
        <div id='setUp' className='setUp_container'>
            <img src={Appimage} />
            <div className='setUp_content'>
                <h1>Set up your online store.<br />Reach more customers.</h1>
                <p>Get ahead of the trend and open your very own online store. Help your customers browse your store and order directly from their phones. Use the power of digital apps to grow your business exponentially.</p>
                <p>eSamudaay lets your business get online for a small monthly fee and no extra charges at all.<br />So what are you waiting for?</p>
                <Link to="/contact"><button>Sell Online On Kakinada Super</button></Link>
            </div>

        </div>
    )
}

export default SetUp