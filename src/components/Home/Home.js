import React,{ useState,useEffect } from "react";
import Header from '../Header/Header';
//import Footer from '../Footer/Footer';
import Footer from '../user/Footer';
import Card from '../Card/Card';
import AllProducts from "../Modal/All_Products.js";
import './Home.css';
import './Lowest.css';
import CategoryList from '../Modal/ModalPage.js'
import Advert from './assets/Advert-removebg-preview.png';
import Delivery from'./assets/delivery.svg'
import Guarantee from './assets/Guarantee.svg'
import Gucci from './assets/Gucci.svg';
import PlayStation from './assets/PlayStation.svg';
import Service from './assets/Service.svg';
import Speaker from './assets/Speaker.svg';
import Womens from './assets/Womens.svg'; 

const products = async ()=>{
  try {
    const res = await fetch('/api/products?limit=4');
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    return await res.json();
  } catch (err) {
    console.error('Error fetching products:', err);
  }return []
}
const fetchWithTokenRefresh = async (url, options = {}) => {
  let token = localStorage.getItem('token');
  console.log('Fetching',token)
  // Function to refresh token
  const refreshToken = async () => {
    console.log('refreshing token')
    const refresh_token = localStorage.getItem('refresh_token');
    console.log("tokenexpired",refresh_token)
    const res = await fetch('/user/refresh_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token: refresh_token }),
    });

    if (res.ok) {
      const data = await res.json();
      localStorage.setItem('token', data.access_token);
      return data.access_token;
    } else {
      console.error('Failed to refresh token');
      return null;
    }
  };
  console.log('using normal token')

  const res = await fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      'Authorization': `Bearer ${token}`,
    },
  })
  if (res.status === 401) {  // Token might be expired
    console.log('using refreshToken') 
    token = await refreshToken();
    if (token) {
      // Retry with new token
      console.log('retrying with new token')
      return fetchWithTokenRefresh(url, options);
    }
  }
  
  return res.json()
};

const fetchRecommendedProducts = async () => {
  try {
    const res = await fetchWithTokenRefresh('/api/recommended_products', {
      method: 'GET',
    });
    
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    return await res.json();
  } catch (err) {
    console.error('Error fetching recommended products:', err);
    return [];
  }
};

const fetchrandomproducts = async(no)=>{
  try {
    const res = await fetch(`/api/top_discounted_rated_products?limit=${no}`);
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    return await res.json();
  } catch (err) {
    console.error('Error fetching random products:', err);
  } return [];
}
function Home(){
  const [productsList, setproductsList] =useState([])
  const [recommendedProducts,setrecomendedProducts] =useState([])
  const [loading,setisLoading] =useState(true)
  useEffect(()=>{
    products().then((data)=>{
      if(data){
        setproductsList(data)
        console.log("data loaded")
      }
    })
    fetchRecommendedProducts().then((data)=>{
      if (data && data.length ){
        if (data.length < 4){
          const tofetch = 4 - data.length
          console.log(data.length)
          fetchrandomproducts(tofetch).then((randomProducts)=>{
            if(randomProducts){
              setrecomendedProducts(data.concat(randomProducts));
            }
            else{
              setrecomendedProducts(data)
            }
          });
        } 
      }else{
        fetchrandomproducts(4).then((randomProducts)=>{
          if (randomProducts) {
            setrecomendedProducts(randomProducts);
          }
        });
      }
    }).catch((error)=>{
      console.error('Error fetching recommended products:', error);
    }).finally(()=>{
      setisLoading(false)
    })
  }, []);
  console.log()
  const productsLister=(productsList)=>{
        return productsList.map((product,index)=>{
          return (<Card key={index} productName={product.name} image_url={product.image_url} price={product.price} id={product.id} />
        )})
  }
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
        <CategoryList/>
      <hr className="line" />    
    </div>
  </div>
  <div className="selection_container">
    <div className="head">
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
        {loading === true ? null : productsLister(recommendedProducts)}
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
            {loading === true ? null : productsLister(productsList)}
        </div> 
      </div>
    </div>
    <div className="All_products_container">
        {AllProducts()}
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
