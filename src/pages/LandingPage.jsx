import React from 'react';
import { Footer, HeroPage, LeaderShip, Navbar, SetUp, Story } from '../components';

import "../index.css";

const LandingPage = () => {
    return (
        <>
            <Navbar />
            <section className='section'>
                <HeroPage />
                <SetUp />
                <Story />
                {/* <LeaderShip /> */}
            </section>
            <Footer />
        </>
    )
}

export default LandingPage