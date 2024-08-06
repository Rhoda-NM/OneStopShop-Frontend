import React from 'react';
import './about.css';

const About = () => {
  return (
    <div>
      {/* <header>
        <div className="logo">GeeksforGeeks</div>
      </header> */}

      <section className="about">
        <h1>About Us</h1>
        <p style={{ fontWeight: 'bold' }}>
          GeeksforGeeks is a leading platform...
        </p>
        <div className="about-info">
          <div className="about-img">
            <img 
              src="https://media.geeksforgeeks.org/wp-content/uploads/20230824153359/371ba38b-8a03-4bff-916c-c3fa5396ceda.jfif" 
              alt="Geeksforgeeks" 
            />
          </div>
          <div>
            <p> 
              GeeksforGeeks is a leading platform that provides computer science 
              resources and coding challenges for programmers and technology 
              enthusiasts, along with interview and exam preparations for upcoming 
              aspirants. With a strong emphasis on enhancing coding skills and 
              knowledge, it has become a trusted destination for over 12 million 
              plus registered users worldwide.
            </p>
            <button>Read More...</button>
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
