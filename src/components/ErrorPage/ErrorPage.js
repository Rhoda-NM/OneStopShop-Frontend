import React from "react";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './ErrorPage.css';

function ErrorPage() {
    return (
        <>
            <Header />
            <hr className="separator"/>
            <div className="error-page">
                <div className="error-container">
                    <p className="breadcrumb">Home / 404 Error</p>
                    <h1 className="error-title">404 Not Found</h1>
                    <p className="error-message">Page not found. Return to home page.</p>
                    <a href="/" className="back-home-btn">Back to home page</a>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default ErrorPage;
