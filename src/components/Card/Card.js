import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../AuthProvider";
import AddToWishlist from "../wishlist/AddWishlist";
import './Card.css';


const fetchDiscountData = async (product_id) => {
    try {
        const res = await fetch(`/api/discounts/${product_id}`);
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        return await res.json();
    } catch (e) {
        console.error('Error fetching discount data:', e);
        return null;
    }
};

const fetchRating = async (product_id) => {
    try {
        const res = await fetch(`/api/ratings/${product_id}`);
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        return await res.json();
    } catch (e) {
        console.error('Error fetching rating:', e);
        return null;
    }
};

function isDateViable(isoDate) {
    const givenDate = new Date(isoDate);
    const currentDate = new Date();
    return givenDate >= currentDate;
}

function discountCalculator(data, price, setDiscount) {
    if (data && isDateViable(data.end_date)) {
        const old_price = Math.round((100 * price) / (100 - data.discount_percentage));
        setDiscount(old_price);
    }
}

function RatingsCalculator(data, setRating) {
    if (data && data.length > 0) {
        let total_rating = 0;
        let count = 0;
        data.forEach((item) => {
            total_rating += item.rating;
            count++;
        });
        setRating(Math.round(total_rating / count));
    } else {
        setRating(null);
    }
}
function RatingStars(rating) {
    if (rating === null) {
        return null;
    }
    let star_array = [];
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            star_array.push(<i key={i} className="bi bi-star-fill icon_yellow"></i>);
        } else {
            star_array.push(<i key={i} className="bi bi-star-fill no_fill"></i>);
        }
    }
    return star_array;
}

function Card({ productName, image_url, price, id, addToWishlist }) {
    const navigate = useNavigate();
    const { user }= useAuth();
    const token = localStorage.getItem('token');
    const [loading, setLoading] = useState(true);
    const [rating, setRating] = useState(null);
    const [discount, setDiscount] = useState(null);

   
    const handleAddToWishlist = async () => {
        if (!user) {
            navigate('/user/login');
            return;
        }

        await AddToWishlist(id, token);
        alert('Added to wishlist successfully!');
       
        
        
    };
    useEffect(() => {
        Promise.all([
            fetchDiscountData(id).then((data) => discountCalculator(data, price, setDiscount)),
            fetchRating(id).then((data) => RatingsCalculator(data, setRating))
        ]).then(() => setLoading(false));
    }, [id, price]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="card" onClick={() => navigate(`/products/${id}`)}>
            <div className="Image_container">
                <div className="img">
                    <img src={image_url} alt="item_to_sell" />
                </div>
                <div className='img_icons'>
                    <div className="icon_container" onClick={handleAddToWishlist}>
                        <div className="image_ellipse"></div>
                        <i className="bi bi-heart"></i>
                    </div>
                    <div className="icon_container" onClick={() => navigate(`/products/${id}`)}>
                        <div className="image_ellipse"></div>
                        <i className="bi bi-eye icon_view"></i>
                    </div>
                </div>
            </div>
            <div className="card_body">
                <div className="card_title">
                    <h2>{productName}</h2>
                </div>
                <div className="price_area">
                    <div className="price_container">
                        <span className="current_price">${price}.00</span>
                        {discount && <span className="old_price">${discount}.00</span>}
                    </div>
                </div>
                <div className="rating">
                    <div className="rating_container">
                        {RatingStars(rating)}
                    </div>
                    <div className="rating_text">
                        {rating !== null ? rating : ''}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
