import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCcVisa, faCcMastercard, faCcAmex } from '@fortawesome/free-brands-svg-icons';
import './Billings.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';



  // Fetch product details from the backend
  const fetchProductDetails = async (id) => {
    try {
      const response = await fetch(`/api/products/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        const data= await response.json();
        return data;
      } else {
        console.error('Error fetching product details');
      }
    } catch (error) {
      console.error('Error fetching product details:', error);
    }
  };
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

  async function saveBillingData(e) {
    e.preventDefault();
    const saveInfo = document.getElementById("saveInfo").checked;
    if (saveInfo) {
      const billingData = {
        full_name: `${formData.firstName} ${formData.lastName}`,
        address_line_1: formData.streetAddress,
        address_line_2: formData.apartment || "",
        city: formData.town,
        state: "state_placeholder", // Adjust this if needed
        postal_code: "postal_code_placeholder", // Adjust this if needed
        country: "country_placeholder", // Adjust this if needed
        phone_number: formData.phoneNumber,
        email: formData.emailAddress,
      };
  
      try {
        const response = await fetch('/billing_details', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}` // Replace with your JWT token handling
          },
          body: JSON.stringify(billingData)
        });
  
        if (!response.ok) {
          throw new Error('Failed to save billing information.');
        }
  
        const data = await response.json();
        console.log('Billing details saved:', data);
      } catch (error) {
        console.error('Error:', error);
      }
    }
  }
  
  const [orderItems, setOrderItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [productImages, setProductImages] = useState({}); // store product images in state

  useEffect(() => {
    // Fetch order data from the backend
    const fetchOrderData = async () => {
      try {
        const response = await fetch('/api/cart', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`, // Assuming JWT token is stored in localStorage
          }
        });

        if (response.ok) {
          const data = await response.json();
          console.log(data);
          setOrderItems(data.order_items);

          // Calculate total price
          const totalPrice = data.order_items.reduce((acc, item) => acc + item.price * item.quantity, 0);
          setTotal(totalPrice);

          const productImagePromises = data.order_items.map(item => fetchProductDetails(item.product_id));
          const productImages = await Promise.all(productImagePromises);
          setProductImages(productImages.reduce((acc, image, index) => ({ ...acc, [index]: image.image_url }), {}));
        } else {
          console.error('Error fetching order data');
        }
      } catch (error) {
        console.error('Error fetching order data', error);
      }
    };
    const fetchBillingData = async () => {
      try {
        const response = await fetch('/billing_details', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`, // Assuming JWT token is stored in localStorage
          }
        });
    
        if (response.ok) {
          const data = await response.json();
          console.log(data);
          
          // Map backend response to form fields
          setFormData({
            firstName: data.full_name.split(" ")[0] || "",
            lastName: data.full_name.split(" ")[1] || "",
            streetAddress: data.address_line_1 || "",
            apartment: data.address_line_2 || "",
            town: data.city || "",
            phoneNumber: data.phone_number || "",
            emailAddress: data.email || ""
          });
        } else {
          console.error('Error fetching billing details');
        }
      } catch (error) {
        console.error('Error fetching billing details', error);
      }
    };
    fetchOrderData();
    fetchBillingData()
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/stkpush', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`, // Assuming JWT token is stored in localStorage
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Order placed:', result);
      } else {
        console.error('Error placing order');
      }
    } catch (error) {
      console.error('Error placing order', error);
    }
  };

  return (
    <>
    <Header />
    <div className="billing-container">
      <div className="billing-details">
        <h2>Billing Details</h2>
        <form onSubmit={saveBillingData}>
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
        {orderItems.map((item, index) => (
              <div className="product-item" key={item.product_id}>
                <img src={productImages[index]} alt={item.product_name} />
                <span>{item.product_name}</span>
                <span>${item.price}</span>
                <span>Quantity: {item.quantity}</span>
              </div>
            ))}
        </div>
        <div className="pricing-summary">
          <div className="subtotal">
            <span>Subtotal:</span>
            <span>${total}</span>
          </div>
          <hr></hr>
          <div className="shipping">
            <span>Shipping:</span>
            <span>Free</span>
          </div>
          <hr></hr>
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
        <div className="order-submit">
         <button type="submit" onClick={handleSubmit}>Place Order</button>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default Billings;
