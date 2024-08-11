import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import './Card.css'


const fetchData = (page) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data: Array.from({ length: 4 }, (_, index) => ({
            id: index + 1 + (page - 1) * 4,
          })),
        });
      }, 1000); // Assuming you want to simulate a delay of 1 second
    });
  };
  

function Card({ product }){
    const { id, name, price, description, image_url, stock}= product;
    //const [loading,setisLoading] = useState(true);  
    //const [page,setPage]= useState(1);
    //const [totalPages,setTotalPages] = useState(0)
    return(
        <div class="card">
            <div class="Image_container">
                <div class="img">
                    <img src={image_url} alt="item_to_sell"/>
                </div>
                <div class='img_icons'>
                    <div class="icon_container">
                        <div class="image_ellipse"></div>
                        <Link to={`/wishlists/${product.id}`}> <i class="bi bi-heart"></i></Link>
                    </div>
                    <div class="icon_container">
                        <div class="image_ellipse"></div>
                        <Link to={`/products/${product.id}`}>
                            <i class="bi bi-eye icon_view"></i>
                        </Link>
                        
                    </div>
                </div>
            </div>
            <div class="card_body">
                <div class="card_title">
                    <h2>{name}</h2>
                </div>
                <div class="price_area">
                    <div class="price_container">
                        <span class="current_price">{price}</span>
                        <span class="old_price">$360</span>
                    </div>
                </div>
                <div class="rating">
                    <div class="rating_container">
                        <i class="bi bi-star-fill icon_yellow"></i>
                        <i class="bi bi-star-fill icon_yellow"></i>
                        <i class="bi bi-star-fill icon_yellow"></i>
                        <i class="bi bi-star-fill icon_yellow"></i>
                        <i class="bi bi-star-fill icon_yellow"></i>
                    </div>
                    <div class="rating_text">
                        (65)
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;