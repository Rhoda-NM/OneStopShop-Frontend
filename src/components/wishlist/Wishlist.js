import React from 'react';
import './wishlist.css';

const WishlistComponent = () => {
  return (
    <div>
      {/* Wishlist */}
      <section className="wishlist">
        <h1>Wishlist</h1>
        <div className="wishlist-cards">
          {/* Card 1 */}
          <div className="card-wrapper">
            <div className="card">
              <div className="card-img">
                <img src="https://i.pinimg.com/474x/07/b2/f1/07b2f18b6e6e93fe26486d275d547b08.jpg" alt="Item 1" />
              </div>
              <button className="card-btn">
                <i className="fas fa-cart-plus"></i> Add to Cart
              </button>
            </div>
            <div className="card-details">
              <h2 className="card-name">Item 1</h2>
              <div className="rating">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
                <i className="far fa-star"></i>
              </div>
              <p className="card-description">Description for Item 1.</p>
              <p className="card-price">$19.99</p>
            </div>
          </div>
          <div className="card-wrapper">
            <div className="card">
              <div className="card-img">
                <img src="https://i.pinimg.com/474x/07/b2/f1/07b2f18b6e6e93fe26486d275d547b08.jpg" alt="Item 1" />
              </div>
              <button className="card-btn">
                <i className="fas fa-cart-plus"></i> Add to Cart
              </button>
            </div>
            <div className="card-details">
              <h2 className="card-name">Item 1</h2>
              <div className="rating">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
                <i className="far fa-star"></i>
              </div>
              <p className="card-description">Description for Item 1.</p>
              <p className="card-price">$19.99</p>
            </div>
          </div>
          <div className="card-wrapper">
            <div className="card">
              <div className="card-img">
                <img src="https://i.pinimg.com/474x/07/b2/f1/07b2f18b6e6e93fe26486d275d547b08.jpg" alt="Item 1" />
              </div>
              <button className="card-btn">
                <i className="fas fa-cart-plus"></i> Add to Cart
              </button>
            </div>
            <div className="card-details">
              <h2 className="card-name">Item 1</h2>
              <div className="rating">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
                <i className="far fa-star"></i>
              </div>
              <p className="card-description">Description for Item 1.</p>
              <p className="card-price">$19.99</p>
            </div>
          </div>
          
          {/* Repeat for other cards */}
          <div className="card-wrapper">
            <div className="card">
              <div className="card-img">
                <img src="https://i.pinimg.com/474x/07/b2/f1/07b2f18b6e6e93fe26486d275d547b08.jpg" alt="Item 1" />
              </div>
              <button className="card-btn">
                <i className="fas fa-cart-plus"></i> Add to Cart
              </button>
            </div>
            <div className="card-details">
              <h2 className="card-name">Item 1</h2>
              <div className="rating">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
                <i className="far fa-star"></i>
              </div>
              <p className="card-description">Description for Item 1.</p>
              <p className="card-price">$19.99</p>
            </div>
          </div>
          <div className="card-wrapper">
            <div className="card">
              <div className="card-img">
                <img src="https://i.pinimg.com/474x/07/b2/f1/07b2f18b6e6e93fe26486d275d547b08.jpg" alt="Item 1" />
              </div>
              <button className="card-btn">
                <i className="fas fa-cart-plus"></i> Add to Cart
              </button>
            </div>
            <div className="card-details">
              <h2 className="card-name">Item 1</h2>
              <div className="rating">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
                <i className="far fa-star"></i>
              </div>
              <p className="card-description">Description for Item 1.</p>
              <p className="card-price">$19.99</p>
            </div>
          </div>
        </div>
      </section>

      {/* Just For You */}
      <section className="wishlist">
        <h1>Just For You</h1>
        <div className="wishlist-cards">
          {/* Repeat the same card structure for Just For You section */}
          <div className="card-wrapper">
            <div className="card">
              <div className="card-img">
                <img src="https://i.pinimg.com/474x/07/b2/f1/07b2f18b6e6e93fe26486d275d547b08.jpg" alt="Item 1" />
              </div>
              <button className="card-btn">
                <i className="fas fa-cart-plus"></i> Add to Cart
              </button>
            </div>
            <div className="card-details">
              <h2 className="card-name">Item 1</h2>
              <div className="rating">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
                <i className="far fa-star"></i>
              </div>
              <p className="card-description">Description for Item 1.</p>
              <p className="card-price">$19.99</p>
            </div>
          </div>
          <div className="card-wrapper">
            <div className="card">
              <div className="card-img">
                <img src="https://i.pinimg.com/474x/07/b2/f1/07b2f18b6e6e93fe26486d275d547b08.jpg" alt="Item 1" />
              </div>
              <button className="card-btn">
                <i className="fas fa-cart-plus"></i> Add to Cart
              </button>
            </div>
            <div className="card-details">
              <h2 className="card-name">Item 1</h2>
              <div className="rating">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
                <i className="far fa-star"></i>
              </div>
              <p className="card-description">Description for Item 1.</p>
              <p className="card-price">$19.99</p>
            </div>
          </div>
          <div className="card-wrapper">
            <div className="card">
              <div className="card-img">
                <img src="https://i.pinimg.com/474x/07/b2/f1/07b2f18b6e6e93fe26486d275d547b08.jpg" alt="Item 1" />
              </div>
              <button className="card-btn">
                <i className="fas fa-cart-plus"></i> Add to Cart
              </button>
            </div>
            <div className="card-details">
              <h2 className="card-name">Item 1</h2>
              <div className="rating">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
                <i className="far fa-star"></i>
              </div>
              <p className="card-description">Description for Item 1.</p>
              <p className="card-price">$19.99</p>
            </div>
          </div>
          <div className="card-wrapper">
            <div className="card">
              <div className="card-img">
                <img src="https://i.pinimg.com/474x/07/b2/f1/07b2f18b6e6e93fe26486d275d547b08.jpg" alt="Item 1" />
              </div>
              <button className="card-btn">
                <i className="fas fa-cart-plus"></i> Add to Cart
              </button>
            </div>
            <div className="card-details">
              <h2 className="card-name">Item 1</h2>
              <div className="rating">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
                <i className="far fa-star"></i>
              </div>
              <p className="card-description">Description for Item 1.</p>
              <p className="card-price">$19.99</p>
            </div>
          </div>
          <div className="card-wrapper">
            <div className="card">
              <div className="card-img">
                <img src="https://i.pinimg.com/474x/07/b2/f1/07b2f18b6e6e93fe26486d275d547b08.jpg" alt="Item 1" />
              </div>
              <button className="card-btn">
                <i className="fas fa-cart-plus"></i> Add to Cart
              </button>
            </div>
            <div className="card-details">
              <h2 className="card-name">Item 1</h2>
              <div className="rating">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
                <i className="far fa-star"></i>
              </div>
              <p className="card-description">Description for Item 1.</p>
              <p className="card-price">$19.99</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WishlistComponent;
