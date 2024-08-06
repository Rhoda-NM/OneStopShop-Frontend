import React from 'react';
import './wishlist.css';

const WishlistComponent = () => {
  return (
    // Wishlist
    <div>
    <section className="wishlist">
      <h1>Wishlist</h1>
      <div className="wishlist-cards">
        <div className="card">
          <div className="card-img">
            <img src="https://i.pinimg.com/474x/07/b2/f1/07b2f18b6e6e93fe26486d275d547b08.jpg" alt="Item 1" />
          </div>
          <div className="card-info">
            <h2 className="card-name">Item 1</h2>
            <p className="card-description">Description.</p>
            <button className="card-btn">Remove</button>
          </div>
        </div>
        <div className="card">
          <div className="card-img">
            <img src="https://i.pinimg.com/474x/07/b2/f1/07b2f18b6e6e93fe26486d275d547b08.jpg" alt="Item 1" />
          </div>
          <div className="card-info">
            <h2 className="card-name">Item 1</h2>
            <p className="card-description">Description.</p>
            <button className="card-btn">Remove</button>
          </div>
        </div> <div className="card">
          <div className="card-img">
            <img src="https://i.pinimg.com/474x/07/b2/f1/07b2f18b6e6e93fe26486d275d547b08.jpg" alt="Item 1" />
          </div>
          <div className="card-info">
            <h2 className="card-name">Item 1</h2>
            <p className="card-description">Description.</p>
            <button className="card-btn">Remove</button>
          </div>
        </div> <div className="card">
          <div className="card-img">
            <img src="https://i.pinimg.com/474x/07/b2/f1/07b2f18b6e6e93fe26486d275d547b08.jpg" alt="Item 1" />
          </div>
          <div className="card-info">
            <h2 className="card-name">Item 1</h2>
            <p className="card-description">Description.</p>
            <button className="card-btn">Remove</button>
          </div>
        </div>
        <div className="card">
          <div className="card-img">
            <img src="https://i.pinimg.com/474x/07/b2/f1/07b2f18b6e6e93fe26486d275d547b08.jpg" alt="Item 2" />
          </div>
          <div className="card-info">
            <h2 className="card-name">Item 2</h2>
            <p className="card-description">Description.</p>
            <button className="card-btn">Remove</button>
          </div>
        </div>
        <div className="card">
          <div className="card-img">
            <img src="https://i.pinimg.com/474x/07/b2/f1/07b2f18b6e6e93fe26486d275d547b08.jpg" alt="Item 3" />
          </div>
          <div className="card-info">
            <h2 className="card-name">Item 3</h2>
            <p className="card-description">Description.</p>
            <button className="card-btn">Remove</button>
          </div>
          
        </div>
      </div>
    </section>

    
    {/* // Just For You */}
    <section className="wishlist">
      <h1>Just For You</h1>
      <div className="wishlist-cards">
        <div className="card">
          <div className="card-img">
            <img src="https://i.pinimg.com/474x/07/b2/f1/07b2f18b6e6e93fe26486d275d547b08.jpg" alt="Item 1" />
          </div>
          <div className="card-info">
            <h2 className="card-name">Item 1</h2>
            <p className="card-description">Description.</p>
            <button className="card-btn">Remove</button>
          </div>
        </div>
        <div className="card">
          <div className="card-img">
            <img src="https://i.pinimg.com/474x/07/b2/f1/07b2f18b6e6e93fe26486d275d547b08.jpg" alt="Item 2" />
          </div>
          <div className="card-info">
            <h2 className="card-name">Item 2</h2>
            <p className="card-description">item 2.</p>
            <button className="card-btn">Remove</button>
          </div>
        </div>
        <div className="card">
          <div className="card-img">
            <img src="https://i.pinimg.com/474x/07/b2/f1/07b2f18b6e6e93fe26486d275d547b08.jpg" alt="Item 3" />
          </div>
          <div className="card-info">
            <h2 className="card-name">Item 3</h2>
            <p className="card-description">Description .</p>
            <button className="card-btn">Remove</button>
          </div>
        </div>
        <div className="card">
          <div className="card-img">
            <img src="https://i.pinimg.com/474x/07/b2/f1/07b2f18b6e6e93fe26486d275d547b08.jpg" alt="Item 1" />
          </div>
          <div className="card-info">
            <h2 className="card-name">Item 1</h2>
            <p className="card-description">Description.</p>
            <button className="card-btn">Remove</button>
          </div>
        </div> <div className="card">
          <div className="card-img">
            <img src="https://i.pinimg.com/474x/07/b2/f1/07b2f18b6e6e93fe26486d275d547b08.jpg" alt="Item 1" />
          </div>
          <div className="card-info">
            <h2 className="card-name">Item 1</h2>
            <p className="card-description">Description.</p>
            <button className="card-btn">Remove</button>
          </div>
        </div> <div className="card">
          <div className="card-img">
            <img src="https://i.pinimg.com/474x/07/b2/f1/07b2f18b6e6e93fe26486d275d547b08.jpg" alt="Item 1" />
          </div>
          <div className="card-info">
            <h2 className="card-name">Item 1</h2>
            <p className="card-description">Description.</p>
            <button className="card-btn">Remove</button>
          </div>
        </div>
      </div>
    </section>
    </div>
    

  );
};

export default WishlistComponent;
