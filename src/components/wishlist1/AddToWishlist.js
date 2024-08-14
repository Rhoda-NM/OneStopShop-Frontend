const fetchWithTokenRefresh = async (url, options = {}) => {
  let token = localStorage.getItem('access_token');
  
  // Function to refresh token
  const refreshToken = async () => {
    const refresh_token = localStorage.getItem('refresh_token');
    const res = await fetch('/api/refresh_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token: refresh_token }),
    });

    if (res.ok) {
      const data = await res.json();
      localStorage.setItem('access_token', data.access_token);
      return data.access_token;
    } else {
      console.error('Failed to refresh token');
      return null;
    }
  };

  const res = await fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      'Authorization': `Bearer ${token}`,
    },
  });

  if (res.status === 401) {  // Token might be expired
    token = await refreshToken();
    if (token) {
      // Retry with new token
      return fetch(url, {
        ...options,
        headers: {
          ...options.headers,
          'Authorization': `Bearer ${token}`,
        },
      });
    }
  }
  
  return res.json();
};

const AddToWishlist = async (productId) => {
  try {
    const token = localStorage.getItem('access_token');
    const response = await fetchWithTokenRefresh('http://127.0.0.1:5555/api/wishlist', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ product_id: productId }) // Ensure the key matches what the server expects
    });

    if (response) {
      console.log('Product added to wishlist successfully');
      return true;
    } else {
      console.error('Failed to add to wishlist:', response);
      return false;
    }
  } catch (error) {
    console.error('Error adding to wishlist:', error);
    alert('An error occurred while adding to wishlist.');
    return false;
  }
};

export default AddToWishlist;
