import React from "react";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Home.css';
import './Lowest.css';
import Advert from './Advert-removebg-preview.png';
import Delivery from'./delivery.svg'
import Guarantee from './Guarantee.svg'
import Gucci from './Gucci.svg';
import PlayStation from './PlayStation.svg';
import Service from './Service.svg';
import Speaker from './Speaker.svg';
import Womens from './Womens.svg'; 
function Home(){
     return(
        <>
        <Header />
<main>
  <div className="content">
  <div className="selection_container">
    <div className="head">
      <div className="top">
        <div className="top-left">
        </div>
        <div className="top-right">
          <h2>Categories</h2>
        </div>
      </div>
      <div className="lower">
        <div className="title">
          <h2>Browse By Category</h2>
        </div>
        <div className="navigation">
          <i className="bi bi-arrow-left-circle"></i>
          <i className="bi bi-arrow-right-circle"></i>
        </div>
      </div>      
      <div className="categories"> 
        <div className="category-container">
          <div className="category">
            <i className="fas fa-mobile-alt"></i>
            <p>Phones</p>
          </div>
          <div className="category">
            <i className="fas fa-desktop"></i>
            <p>Computers</p>
          </div>
          <div className="category">
            <i className="fas fa-book"></i>
            <p>Books</p>
          </div>
          <div className="category">
            <i className="fas fa-desktop"></i>
            <p>Computers</p>
          </div>
          <div className="category">
            <i className="fas fa-camera"></i>
            <p>Camera</p>
          </div>
          <div className="category">
            <i className="fas fa-tshirt"></i>
            <p>Clothes</p>
          </div>
        </div>
      </div>
      <hr className="line" />    
    </div>
  </div>
  <div className="selection_container">
    <div classNameName="head">
      <div className="top">
        <div className="top-left">
        </div>
        <div className="top-right">
          <h2>This Month</h2>
        </div>
      </div>
      <div className="lower">
        <div className="title">
          <h2>Products You'd Like:</h2>
        </div>
        <div className="navigation">
          <i className="bi bi-arrow-left-circle"></i>
          <i className="bi bi-arrow-right-circle"></i>
        </div>
      </div>      
      <div className="categories"> 
        <div className="category-container">
          <div className="category">
            <i className="fas fa-mobile-alt"></i>
            <p>Item1</p>
          </div>
          <div className="category">
            <i className="fas fa-desktop"></i>
            <p>Item2</p>
          </div>
          <div className="category">
            <i className="fas fa-book"></i>
            <p>Item3</p>
          </div>
          <div className="category">
            <i className="fas fa-desktop"></i>
            <p>Item4</p>
          </div>
          <div className="category">
            <i className="fas fa-camera"></i>
            <p>Item5</p>
          </div>
        </div>
      </div>
      <hr className="line" />    
    </div>
  </div>
  <div className="lg_advert">
    <div className="lg_advert_content">
      <div className="advert_content_header">
        <h2>Categories</h2>
      </div>
      <p className="advert_content_text">
        Enhance Your   Music Experience
      </p>
      <div className="advert_content_countdown">
        <div className="flash_sale_timer">
          <div className="time">
            <span className="no">23</span>
            <span className="text">Hours</span>
          </div>  
        </div>
        <div className="flash_sale_timer">
          <div className="time">
            <span className="no">23</span>
            <span className="text">Days</span>
          </div> 
        </div> 
        <div className="flash_sale_timer">
          <div className="time">
            <span className="no">23</span>
            <span className="text long">minutes</span>
          </div>  
        </div>
        <div className="flash_sale_timer">
          <div className="time long_container">
            <span className="no">23</span>
            <span className="text">seconds</span>
          </div>  
        </div>
      </div>
      <div className="advert_content_button ">
        <button className="rounded_button" type="button">Buy Now</button>
      </div>
    </div>
    <div className="advert_image">
      <div className="advert_ellipse"></div>
      <img src={Advert} alt="advert_img" />
    </div>
  </div>
  <div className="selection_container">
    <div className="head">
      <div className="top">
        <div className="top-left">
        </div>
        <div className="top-right">
          <h2>Our Products</h2>
        </div>
      </div>
      <div className="lower">
        <div className="title">
          <h2>Explore Our Products</h2>
        </div>
        <div className="navigation">
          <i className="bi bi-arrow-left-circle"></i>
          <i className="bi bi-arrow-right-circle"></i>
        </div>
      </div>      
      <div className="categories"> 
        <div className="category-container">
          <div className="category">
            <i className="fas fa-mobile-alt"></i>
            <p>Item1</p>
          </div>
          <div className="category">
            <i className="fas fa-desktop"></i>
            <p>Item2</p>
          </div>
          <div className="category">
            <i className="fas fa-book"></i>
            <p>Item3</p>
          </div>
          <div className="category">
            <i className="fas fa-desktop"></i>
            <p>Item4</p>
          </div>
          <div className="category">
            <i className="fas fa-camera"></i>
            <p>Item5</p>
          </div>
          <div className="category">
            <i className="fas fa-mobile-alt"></i>
            <p>Item1</p>
          </div>
          <div className="category">
            <i className="fas fa-desktop"></i>
            <p>Item2</p>
          </div>
          <div className="category">
            <i className="fas fa-book"></i>
            <p>Item3</p>
          </div>
          <div className="category">
            <i className="fas fa-desktop"></i>
            <p>Item4</p>
          </div>
          <div className="category">
            <i className="fas fa-camera"></i>
            <p>Item5</p> 
        </div>
      </div>
    </div>
    <div className="All_products_container">
      <button className="All_products" type="button">View All Products</button>
    </div>
  </div>
</div>
<div className="selection_container">
  <div className="head">
    <div className="top">
      <div className="top-left"></div>
      <div className="top-right">
        <h2>Featured</h2>
      </div>
    </div>
    <div className="lower">
      <div className="title">
        <h2>New Arrival</h2>
      </div>
    </div>
    <div className="New_arrivals">
      <div className="lg_New section">
        <div className="image_container">
          <img src={PlayStation} alt="Large_Image_advertisment"/>
          <div className="image_text_lower">
            <div>
              <h2>PlayStation 5</h2>
              <p>Black and White version of the PS5 coming out on sale.</p>
            </div>
            <div>
              <p><a href="#">Buy Now</a></p>
            </div>
          </div>
        </div>
      </div>
      <div className="lg_New">
        <div className="lg_side">
          <img src={Womens} alt="Large_Image_advertisment"/>
          <div className="image_text">
            <div className="explaining_text">
              <h2>Women's Collections</h2>
              <p>Featured woman collections that give you another vibe.</p>
            </div>
            <div className="buy_now_text">
              <p><a href="#">Shop Now</a></p>
            </div>
          </div>
        </div>
        <div className="lg_small">
          <div className="small_image">
            <div className="advert_ellipse"></div>
            <img src={Speaker} alt="Speaker_advert"/>
            <div className="image_text_lower">
              <div>
                <h2>Speakers</h2>
                <p>Amazon wireless Speakers</p>
              </div>
              <div>
                <p><a href="#">Buy Now</a></p>
              </div>
            </div>
          </div>
          <div className="small_image">
            <div className="advert_ellipse"></div>
            <img src={Gucci} alt="Gucci_product"/>
            <div className="image_text_lower">
              <div>
                <h2>Perfume</h2>
                <p>GUCCI INTENSE OUD EDP</p>
              </div>
              <div>
                <p><a href="#">Buy Now</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div className="Services_container">
<div className="Full_services">
  <div className="icon_ad">
    <img src={Delivery} alt="delivery_icon"/>
    <div className="icon_text">
      <h2>FAST DELIVERY</h2>
      <p>Have Your order Delivered in Time</p>
    </div>
</div>
<div className="icon_ad">
  <img src={Service} alt="Service_icon"/>
  <div className="icon_text">
    <h2>Customer Service</h2>
    <p>Friendly 24/7 customer support</p>
  </div>
</div>
<div className="icon_ad">
  <img src={Guarantee} alt="Service_icon"/>
  <div className="icon_text">
    <h2>MoneyBack</h2>
    <p>We return money within 30 days</p>
  </div>
</div>
</div>
</div>
</div>
</main>
        <Footer/>
        </>
     )
}

export default Home;