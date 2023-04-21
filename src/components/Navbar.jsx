import React, { useState } from 'react'
import { BiMenu } from "react-icons/bi";

import "./components.css";
import Logo from "../images/Logo.png";

const Navbar = () => {
    const [menuText, setMenuText] = useState("Menu");

    const handleSidebar = () => {
        setMenuText("Close");
        if (menuText == "Close") {
            setMenuText("Menu");
        }

    }

    return (
        <div className='container'>
            <div className='logo'>
                <img src={Logo} alt="app-logo" ></img>
            </div>
            <div>
                <ul className='tags'>

                    <li><a href='#shop'>Shopping App</a></li>
                    <li><a href='#setUp'>Set up Shop</a></li>
                    <li><a href='#story'>eSamudaay Kakinada Story</a></li>

                </ul>
            </div>
            <div className='translate'>
                <a href='#'>EN</a> | <a href='#'>TA</a>
            </div>
            <div>
                <button className='menu' onClick={handleSidebar}>
                    <BiMenu />
                    <p>{menuText}</p>
                </button>
            </div>
        </div>
    )
}

export default Navbar
//images src:
//logo = https://deltasuper.in/wp-content/uploads/2021/05/delta-super-logo.svg
//slideshows = https://deltasuper.in/wp-content/uploads/2023/02/screen-1-1-1.png, "https://deltasuper.in/wp-content/uploads/2023/02/screen-2-1.png", https://deltasuper.in/wp-content/uploads/2023/02/screen-4.png, https://deltasuper.in/wp-content/uploads/2023/02/screen-5.png
