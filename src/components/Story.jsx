import React from 'react';

import "./components.css";
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';
import person from "../images/person.png";

const Story = () => {
    return (
        <>
            <div id='story' className='story_container'>
                <div>
                    <h1>Create your digital store on eSamudaay <br />Built by the community For the community
                    </h1>
                    <p>Every time you shop from eSamudaay Kakinada you help the local community by paying neighbourhood businesses rather that big faraway companies. eSamudaay Kakinada charges a fixed fee from the stores and does not exploit them by eating into their business. That’s how the money stays in the community!<br /></p><p>Subscribe to our newsletter to learn more about how you can join eSamudaay Kakinada in supporting local businesses.
                        .</p>
                    <Link to="/contact"><button>Get Started with Kakinada Super</button></Link>
                </div>
                <ReactPlayer
                    width='100%'
                    height="auto"
                    style={{ marginTop: "8vw", marginLeft: "1vw" }}
                    url={'https://www.youtube.com/watch?v=clYAmLK1Aj0&embeds_euri=https%3A%2F%2Fdeltasuper.in%2F&embeds_origin=https%3A%2F%2Fdeltasuper.in&feature=emb_imp_woyt&ab_channel=eSamudaay'} controls={true} />
            </div>
            <div className='setUp_container'>
                <img className='circlePic' src={person} />
                <div className='setUp_content'>
                    <h1>eSamudaay Circles</h1>
                    <p>Our vision is a self-sustaining and prosperous local eSamudaay communities all over Karnataka! We call each such local community of businesses and buyers as a Circle.</p>
                    <p>The eSamudaay app for each Circle is run by a local person called Circle Promoter. The Circle Promoter helps bring local businesses in their area on the eSamudaay app. Learn more on <br /><a href='https://www.esamudaay.com/'>www.eSamudaay.com</a></p>
                </div>

            </div>
        </>
    )
}

export default Story