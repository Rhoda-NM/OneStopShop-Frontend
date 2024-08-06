import React from 'react';
import './about.css';

const About = () => {
  return (
    <div>
      <section className="about">
        <div className="about-info">
        <div>
            <b><h1>Our Story</h1></b>
            <p> 
              Launched in 2024, OneStop is a top-notch online shopping platform, offering a wide range of products for our customers. One Stop Products has more than 1 million products to offer, growing very fast. One Stop Products offers a diverse assortment in categories ranging from consumer electronics to fashion.
            </p>
          </div>
          <div className="about-img">
            <img src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="AboutUs_Image"/>
          </div>
          
        </div>
      </section>

      <section className="stats">
        <div className="container">
          <div className="card">
            <div className="face face1">
              <div className="content">
                <h2>10.5k</h2>
                <p>Sellers Active on Our Site</p>
              </div>
            </div>
            <div className="face face2">
              <i className="fas fa-users"></i>
            </div>
          </div>
          <div className="card">
            <div className="face face1">
              <div className="content">
                <h2>33k</h2>
                <p>Monthly Product Sales</p>
              </div>
            </div>
            <div className="face face2">
              <i className="fas fa-box"></i>
            </div>
          </div>
          <div className="card">
            <div className="face face1">
              <div className="content">
                <h2>4.5k</h2>
                <p>Customers Active on Our Site</p>
              </div>
            </div>
            <div className="face face2">
              <i className="fas fa-user"></i>
            </div>
          </div>
          <div className="card">
            <div className="face face1">
              <div className="content">
                <h2>25k</h2>
                <p>Annual Gross Sales</p>
              </div>
            </div>
            <div className="face face2">
              <i className="fas fa-dollar-sign"></i>
            </div>
          </div>
        </div>
      </section>

      <section className="team">
        <h1>Meet Our Team</h1>
        <div className="team-cards">
          <div className="card">
            <div className="card-img">
              <img 
                src="https://i.pinimg.com/474x/d2/70/55/d2705542ca1d6486cd3d5ba72d6bf014.jpg" 
                alt="User 1" 
              />
            </div>
            <div className="card-info">
              <h2 className="card-name">Rhoda Muya</h2>
              <p className="card-role">Scrum Master</p>
              <a href="https://github.com/Rhoda-NM" target="_blank" rel="noopener noreferrer">
                <button className="github-btn">GitHub Profile</button>
              </a>
            </div>
          </div>

          <div className="card">
            <div className="card-img">
              <img 
                src="https://i.pinimg.com/474x/d2/70/55/d2705542ca1d6486cd3d5ba72d6bf014.jpg" 
                alt="User 2" 
              />
            </div>
            <div className="card-info">
              <h2 className="card-name">Ephy Wachira</h2>
              <p className="card-role">Developer</p>
              <a href="https://github.com/Ephymuiruri" target="_blank" rel="noopener noreferrer">
                <button className="github-btn">GitHub Profile</button>
              </a>
            </div>
          </div>

          <div className="card">
            <div className="card-img">
              <img 
                src="https://i.pinimg.com/474x/d2/70/55/d2705542ca1d6486cd3d5ba72d6bf014.jpg" 
                alt="User 2" 
              />
            </div>
            <div className="card-info">
              <h2 className="card-name">Maria Kamau</h2>
              <p className="card-role">Developer</p>
              <a href="https://github.com/mwanjiru12" target="_blank" rel="noopener noreferrer">
                <button className="github-btn">GitHub Profile</button>
              </a>
            </div>
          </div>

          <div className="card">
            <div className="card-img">
              <img 
                src="https://i.pinimg.com/474x/d2/70/55/d2705542ca1d6486cd3d5ba72d6bf014.jpg" 
                alt="User 2" 
              />
            </div>
            <div className="card-info">
              <h2 className="card-name">Bravin Kibet</h2>
              <p className="card-role">Developer</p>
              <a href="https://github.com/Bravinkibet" target="_blank" rel="noopener noreferrer">
                <button className="github-btn">GitHub Profile</button>
              </a>
            </div>
          </div>

          <div className="card">
            <div className="card-img">
              <img 
                src="https://i.pinimg.com/474x/d2/70/55/d2705542ca1d6486cd3d5ba72d6bf014.jpg" 
                alt="User 2" 
              />
            </div>
            <div className="card-info">
              <h2 className="card-name">Lennis Maina</h2>
              <p className="card-role">Developer</p>
              <a href="https://github.com/Bravinkibet" target="_blank" rel="noopener noreferrer">
                <button className="github-btn">GitHub Profile</button>
              </a>
            </div>
          </div>

          <div className="card">
            <div className="card-img">
              <img 
                src="https://i.pinimg.com/474x/d2/70/55/d2705542ca1d6486cd3d5ba72d6bf014.jpg" 
                alt="User 3" 
              />
            </div>
            <div className="card-info">
              <h2 className="card-name">Brian Onduso</h2>
              <p className="card-role">Developer</p>
              <a href="https://github.com/BrianOnduso0" target="_blank" rel="noopener noreferrer">
                <button className="github-btn">GitHub Profile</button>
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <section className="services">
  <div className="service-item">
    <i className="fas fa-truck"></i>
    <h3>Free and Fast Delivery</h3>
    <p>Free delivery for all orders over $140</p>
  </div>
  <div className="service-item">
    <i className="fas fa-headset"></i>
    <h3>24/7 Customer Service</h3>
    <p>Friendly 24/7 customer support</p>
  </div>
  <div className="service-item">
    <i className="fas fa-undo"></i>
    <h3>Money Back Guarantee</h3>
    <p>We return money within 30 days</p>
  </div>
</section>

    </div>
  );
};

export default About;
