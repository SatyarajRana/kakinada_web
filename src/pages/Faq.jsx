import React from 'react'
import "./pages.css";
import "../components/components.css"
import { Navbar, Footer } from "../components";
const Faq = () => {
    return (
        <div>
            <Navbar />
            <div className='contact_container'>
                <div>
                    <h1 className='contact'>Frequently Asked Questions</h1>
                </div>
                <div className='contact_content'>
                    <h3>What is eSamudaay?</h3>
                    <p>eSamudaay is a “Business in a Box” Software solution which enables aspiring digital entrepreneurs to set-up and scale-up their Local e-Commerce Businesses.</p>
                    <h3>What is L Commerce?</h3>
                    <p>Local eCommerce (also known as hyper-local commerce) falls under the umbrella of Offline-to-Online commerce (O2O). O2O means that retailers with physical stores can (and should) offer their inventory and sell to local online shoppers.
                    </p><p>
                        It makes logical sense to sell to local customers before going out to the whole world. Many stores make the mistake of trying to sell online to the entire world before maximizing the local part. Local is typically within a 20 KM radius around the location of the store – the distance where a shopper may actually drive or local delivery can be quickly provided. LCommerce is a new term coined by eSamudaay to signify a company that is optimized to provide e-Commerce and other Digital services optimized for the local area.</p>
                    <h3>What is a Circle?</h3>
                    <p>Circle is a technical term in eSamudaay Back-end used to separate one LCommerce business from another. Each LCommerce business supported on eSamudaay gets a unique circle code which is used by both sellers and customers to connect with the LCommerce service provider.</p>
                    <p>Please see the below example to understand the concept of “Circle”:</p>
                    <p> 1. Akash Chopra registers on eSamudaay.com to set up an LCommerce Business in Karnal in Haryana. </p><p>
                        2. After attending the information sharing sessions and doing detailed pre-launch planning, Akash decides to launch LCommerce in Karnal and incorporates his company – say – Karnal eSamudaay Digital Services Private Limited (KEDSPL)</p><p>
                        3. A Circle Promoter agreement is signed between Karnal eSamudaay Digital Services Private Limited and Nirmund Digital Distributions Private Limited (esamudaay.com)
                        4. KEDSPL is provided a unique circle code KARNAL1 on eSamudaay</p><p>
                        5. Akash decides to launch the Apps without any changes i.e. Users would need to choose KARNAL1 circle code to access KEDSPL services</p><p>
                        6. Akash and team onboard many businesses such as Restaurants, Supermarkets, Kiranas, Vegetables and Fruits Vendors, Meat Stores, Pharmacies, Service Providers, etc. who each download and configure the eSamudaay Seller Mobile App (Foore). During the configuration, each seller chooses the Circle Code KARNAL1</p><p>
                        7. Akash and team now market their services and Customers download the eSamudaay Consumer App
                        8. During registration, the Consumer App discovers KARNAL1 circle using GPS location and suggests that they connect with that Circle.</p><p>
                        9. As soon as they do that, all the sellers connected to the circle KARNAL1 are visible to the consumer and any new seller added to the circle is also automatically visible.</p>

                    <h3>What is Circle Promoter and what is Circle Promoter Console?</h3>
                    <p>In the above example, KEDSPL is a Circle Promoter of KARNAL1 and Akash is a Circle Promoter CEO of KARNAL1.
                    </p><p>
                        While Console is a Digital Tool (software) specifically designed for Circle Promoters which is easily accessible by clicking on a link Circle Promoter Console and makes the CP job easy by managing everything in a circle from your desktop.
                    </p>
                    <h3>Who can be a Circle Promoter and how can the Circle Promoter Console help him/her?</h3>
                    <p>Anyone with Local Knowledge, access to seed capital of around Rs. 5L, strong work ethic, local relationships, ability to hire a team locally, and preferably working knowledge (even as a consumer) of Hyper-local digital commerce is ideally suited to be a Circle Promoter. Keen interest in developing your locality/town/community and experience in Digital Marketing is a plus.</p>
                    <p>
                        Console help you in every stage while you’re doing business in a circle, Below are things you can do.
                        <p></p>
                        1. Keep track of sellers inventory and update listings from the catalog tab<p></p>
                        2. Monitor your seller performance<p></p>
                        3. Keep track of your daily sales for all the products of your sellers on eSamudaay.<p></p>
                        4. Manage your Sellers subscriptions and send notifications to sellers to remind payment<p></p>
                        5. Lead management, where you can manage and add leads, follow up to convert them as sellers in your circle.<p></p>
                        6. Marketing tools help you connect with merchants and solve any dispute merchants have.</p>



                    <h3>How do I start my Circle Promoter journey?</h3>
                    <p>1. Register yourself at esamudaay.com/lcommerce-platform on our website.<p></p>
                        2. Once you register yourself, you will receive the webinar link, please attend the webinar in your available time slots, at the end of the webinar, you will have a form fill out for a face to face interview with our Circle Promotor relationship head.



                    </p>


                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Faq