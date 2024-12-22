
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <h3>About Us</h3>
          <p>
            We are passionate about sharing delicious recipes <br />
            and meal delivery for your <br />
            journey easier and enjoyable!
          </p>
        </div>
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>Email: contact@recipedelivery.com</p>
          <p>Phone: +123 456 7890</p>
          <p>Address: 123 Fransis Lane,Kelaniya</p>
        </div>
        <div className="footer-social">
          <h3>Follow Us</h3>
          <a href="#">Facebook</a>
          <br />
          <a href="#">Twitter</a>
          <br />
          <a href="#">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;