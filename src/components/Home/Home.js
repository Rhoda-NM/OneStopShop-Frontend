import React from "react";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Home(){
     return(
        <>
        <Header />
        <hr/>
        <div>
            <h1>Welcome to One Stop Products</h1>
            <p>Our mission is to provide the best products and services to our customers.</p>
        </div>
        <Footer/>
        </>
     )
}

export default Home;