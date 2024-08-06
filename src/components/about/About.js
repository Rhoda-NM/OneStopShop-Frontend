import React from 'react';
import './about.css';

const About = () => {
  return (
    <div>
      {/* <header>
        <div className="logo">GeeksforGeeks</div>
      </header> */}

      <section className="about">
        {/* <h1>About Us</h1>
        {/* <p style={{ fontWeight: 'bold' }}>
          GeeksforGeeks is a leading platform...
        </p> */}
        <div className="about-info">
          <div className="about-img">
            <img 
              src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQRt4w7xyeO9UvF_KowBNMSU5zhffroNOvb_23zkWsx-Cbzywcx" 
              alt="AboutUs_Image" 
            />
          </div>
          <div>
            <h1>    Our Story</h1>
            <p> 
            Launced in 20124, OneStop is a leading onlineshopping platform,, offering a wide range of products for our customers
            One Stop Products has more than 1 Million products to offer, growing at a very fast. One Stop Products offers a diverse assotment in categories ranging  from consumer.
            </p>
            {/* <button>Read More...</button> */}
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
                src="https://media.geeksforgeeks.org/wp-content/uploads/20230824122630/business-office-business-woman-professional.jpg" 
                alt="User 1" 
              />
            </div>
            <div className="card-info">
              <h2 className="card-name">Jane</h2>
              <p className="card-role">CEO and Founder</p>
              <p className="card-email">jane@example.com</p>
              <p><button className="button">Contact</button></p>
            </div>
          </div>

          <div className="card">
            <div className="card-img">
              <img 
                src="https://media.geeksforgeeks.org/wp-content/uploads/20230822183347/man-portrait-businessman-male.jpg" 
                alt="User 2" 
              />
            </div>
            <div className="card-info">
              <h2 className="card-name">Miller</h2>
              <p className="card-role">Co-Founder</p>
              <p className="card-email">Miller@example.com</p>
              <p><button className="button">Contact</button></p>
            </div>
          </div>

          <div className="card">
            <div className="card-img">
              <img 
                src="https://media.geeksforgeeks.org/wp-content/uploads/20230822183347/man-portrait-businessman-male.jpg" 
                alt="User 2" 
              />
            </div>
            <div className="card-info">
              <h2 className="card-name">Miller</h2>
              <p className="card-role">Co-Founder</p>
              <p className="card-email">Miller@example.com</p>
              <p><button className="button">Contact</button></p>
            </div>
          </div>

          <div className="card">
            <div className="card-img">
              <img 
                src="https://media.geeksforgeeks.org/wp-content/uploads/20230822183347/man-portrait-businessman-male.jpg" 
                alt="User 2" 
              />
            </div>
            <div className="card-info">
              <h2 className="card-name">Miller</h2>
              <p className="card-role">Co-Founder</p>
              <p className="card-email">Miller@example.com</p>
              <p><button className="button">Contact</button></p>
            </div>
          </div>

          <div className="card">
            <div className="card-img">
              <img 
                src="https://media.geeksforgeeks.org/wp-content/uploads/20230822183347/man-portrait-businessman-male.jpg" 
                alt="User 2" 
              />
            </div>
            <div className="card-info">
              <h2 className="card-name">Miller</h2>
              <p className="card-role">Co-Founder</p>
              <p className="card-email">Miller@example.com</p>
              <p><button className="button">Contact</button></p>
            </div>
          </div>

          <div className="card">
            <div className="card-img">
              <img 
                src="https://media.geeksforgeeks.org/wp-content/uploads/20230824122630/business-office-business-woman-professional.jpg" 
                alt="User 3" 
              />
            </div>
            <div className="card-info">
              <h2 className="card-name">Joe</h2>
              <p className="card-role">Co-Founder</p>
              <p className="card-email">Joe@example.com</p>
              <p><button className="button">Contact</button></p>
            </div>
          </div>
        </div>

        
      </section>
    </div>
  );
};

export default About;
