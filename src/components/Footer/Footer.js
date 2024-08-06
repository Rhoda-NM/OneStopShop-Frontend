import React from "react";
import './footer.css'
import Image from '../assets/onestoplogo.svg'

function Footer (){
    return(
        <footer className="footer text-white mt-5 p-4">
        <div className="container">
            <div className="row">
                <div className="col-md-3 footer-section logo">
                    <img src={Image} alt="OneLogo"/>
                    <p>© 2024 One Stop Products All rights reserved</p>
                </div>
                <div className="col-md-3 footer-section social">
                    <h4>Social</h4>
                    <ul className="list-unstyled">
                        <li><a href="#" className="text-white">Twitter</a></li>
                        <li><a href="#" className="text-white">YouTube</a></li>
                        <li><a href="#" className="text-white">Instagram</a></li>
                    </ul>
                </div>
                <div className="col-md-3 footer-section company">
                    <h4>Company</h4>
                    <ul className="list-unstyled">
                        <li><a href="#" className="text-white">About</a></li>
                        <li><a href="#" className="text-white">Browse Products</a></li>
                        <li><a href="#" className="text-white">Contact</a></li>
                        <li><a href="#" className="text-white">Support</a></li>
                    </ul>
                </div>
                <div className="col-md-3 footer-section faq">
                    <h4>Frequently Asked Questions</h4>
                    <ul className="list-unstyled">
                        <li><a href="#" className="text-white">Sell On Behalf Terms of Service</a></li>
                        <li><a href="#" className="text-white">Location</a></li>
                    </ul>
                </div>
                <div className="col-md-3 footer-section locations">
                    <h4>Locations</h4>
                    <div className="location">
                        <p><strong>Kai & Karo - Kiambu road</strong></p>
                        <p>Northern Bypass</p>
                        <p>0737665566</p>
                        <p>Kiambu, Kenya</p>
                    </div>
                    <div className="location">
                        <p><strong>Kai & Karo - Westlands</strong></p>
                        <p>Westlands Business park, 4th floor.</p>
                        <p>0716770077</p>
                        <p>Off Chiromo lane</p>
                    </div>
                    <div className="location">
                        <p><strong>Kai & Karo - Diamond plaza II Coming Soon</strong></p>
                        <p>4th avenue parklands</p>
                        <p>3rd floor (parking section)</p>
                        <p>0748770777</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>   
    )
}
export default Footer