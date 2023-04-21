import React from 'react';
import { Link } from 'react-router-dom';

import "./components.css";
import SimpleImageSlider from "react-simple-image-slider";
import Navbar from './Navbar';

const HeroPage = () => {

    const mobImages = [
        {
            url: 'https://deltasuper.in/wp-content/uploads/2023/02/screen-1-1-1.png',
        },
        {
            url: "https://deltasuper.in/wp-content/uploads/2023/02/screen-2-1.png",
        }];

    return (
        <>
            <div>
                <div className='hero_container'>
                    <h1>Kakinada's Local shops <br />are now Online</h1>
                    <Link to="./contact"><button>
                        Start selling on Kakinada Super
                    </button></Link>
                </div>
                <div id="shop" className='hero_sec_container'>
                    <div className='hero_left'>
                        <h1>Ordering from nearby stores has never been easier</h1>
                        <p>eSamudaay Kakinada is the new digital address of your local kirana and favourite food joints! Shop for daily essentials, tasty food and much more from the convenience of your home. Have the peace of mind of knowing your deliveries are coming from the same local places you have known for years.</p>

                        <ul className='hero_list'>
                            <li>Food</li>
                            <li>Groceries</li>
                            <li>Vegetables</li>
                        </ul>

                        <Link to="/contact"><button type='button'>Coming Soon</button></Link>
                    </div>
                    <div className='hero_right'>
                        <SimpleImageSlider
                            className="slider"
                            bgColor="white"
                            autoPlay={true}
                            width={400}
                            height={700}
                            showNavs={true}
                            images={mobImages}
                        />
                    </div>
                </div>
            </div>
        </>
    );

}

export default HeroPage;
//https://esamudaayKakinada.com/wp-content/uploads/2021/05/top-bg.png
//esamudaayKakinada.com/wp-content/uploads/2021/05/left-halfcircle.png