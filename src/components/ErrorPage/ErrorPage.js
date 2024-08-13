import React from "react";
import Header from '../Header/Header';
import Footer from '../user/Footer';
import './ErrorPage.css';

function ErrorPage() {
    return (
        <>
            <Header />
            <div className="error-page">
                    <div className="Error_title">
                        <h1 className="error-title">404 Not Found</h1>
                    </div>
                    <div className="error_message">
                    <p className="error-message">Page not found. Return to home page.</p>
                    </div>
                    <div className="error_button">
                        <a href="/" className="back-home-btn">Back to home page</a>
                    </div>
            </div>
            <Footer />
        </>
    );
}

export default ErrorPage;
