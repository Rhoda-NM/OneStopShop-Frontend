import React from 'react'
import axios from 'axios';

 const AddToWishlist = async (productId, token) => {
    axios.post('/api/wishlist', {
        product_id: productId
    }, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(response => console.log(response.data))
    .catch(error => console.error('Error:', error));
    };
      


export default AddToWishlist;