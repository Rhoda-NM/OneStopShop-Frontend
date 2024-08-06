import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCcVisa, faCcMastercard, faCcAmex } from '@fortawesome/free-brands-svg-icons';
import './Billings.css';

function Billings() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    town: '',
    streetAddress: '',
    apartment: '',
    phoneNumber: '',
    emailAddress: '',
    paymentMethod: 'cashOnDelivery',
    couponCode: ''
  });

  const [products] = useState([
    { name: 'LCD Monitor', price: 650, quantity: 1 },
    { name: 'HI Gamepad', price: 1100, quantity: 1 }
  ]);

  const [subtotal, setSubtotal] = useState(0);
  const [shipping] = useState(0); // Assuming free shipping
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const newSubtotal = products.reduce((acc, product) => acc + product.price * product.quantity, 0);
    setSubtotal(newSubtotal);
    setTotal(newSubtotal + shipping);
  }, [products, shipping]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Order placed:', formData);
  };

  return (
    <div className="billing-container">
      <div className="billing-details">
        <h2>Billing Details</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">First Name*</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name*</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="town">Town/City*</label>
            <input
              type="text"
              id="town"
              name="town"
              value={formData.town}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="streetAddress">Street Address*</label>
            <input
              type="text"
              id="streetAddress"
              name="streetAddress"
              value={formData.streetAddress}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="apartment">Apartment, floor, etc. (optional)</label>
            <input
              type="text"
              id="apartment"
              name="apartment"
              value={formData.apartment}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number*</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="emailAddress">Email Address*</label>
            <input
              type="email"
              id="emailAddress"
              name="emailAddress"
              value={formData.emailAddress}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="checkbox"
              id="saveInfo"
              name="saveInfo"
            />
            <label htmlFor="saveInfo">Save this information for faster check-out next time</label>
          </div>
        </form>
      </div>
      <div className="order-summary">
        <div className="product-summary">
          {products.map((product, index) => (
            <div className="product-item" key={index}>
              <img src={`/${product.name.toLowerCase().replace(/ /g, '-')}.jpg`} alt={product.name} />
              <span>{product.name}</span>
              <span>${product.price}</span>
            </div>
          ))}
        </div>
        <div className="pricing-summary">
          <div className="subtotal">
            <span>Subtotal:</span>
            <span>${subtotal}</span>
          </div>
          <div className="shipping">
            <span>Shipping:</span>
            <span>{shipping === 0 ? 'Free' : `$${shipping}`}</span>
          </div>
          <div className="total">
            <span>Total:</span>
            <span>${total}</span>
          </div>
        </div>
        <div className="payment-methods">
          <div className="form-group">
            <input
              type="radio"
              id="bank"
              name="paymentMethod"
              value="bank"
              checked={formData.paymentMethod === 'bank'}
              onChange={handleChange}
            />
            <label htmlFor="bank">Bank</label>
            <div className="payment-icons">
              <FontAwesomeIcon icon={faCcVisa} size="2x" />
              <FontAwesomeIcon icon={faCcMastercard} size="2x" />
              <FontAwesomeIcon icon={faCcAmex} size="2x" />
            </div>
          </div>
          <div className="form-group">
            <input
              type="radio"
              id="cashOnDelivery"
              name="paymentMethod"
              value="cashOnDelivery"
              checked={formData.paymentMethod === 'cashOnDelivery'}
              onChange={handleChange}
            />
            <label htmlFor="cashOnDelivery">Cash on delivery</label>
          </div>
        </div>
        <div className="coupon">
          <input
            type="text"
            placeholder="Coupon Code"
            name="couponCode"
            value={formData.couponCode}
            onChange={handleChange}
          />
          <button type="button">Apply Coupon</button>
        </div>
        <button type="submit" onClick={handleSubmit}>Place Order</button>
      </div>
    </div>
  );
}

export default Billings;
