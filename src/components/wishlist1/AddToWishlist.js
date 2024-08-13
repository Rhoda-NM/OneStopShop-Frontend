const AddToWishlist = async (productId, token) => {
  try {
    console.log('Token:', token);
    const response = await fetch('/api/wishlist', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ productId })
    });

    if (response.ok) {
      return true;
    } else if (response.status === 401) {
      console.error('Failed to add to wishlist: UNAUTHORIZED');
      alert('Your session has expired. Please log in again.');
      // Optionally redirect to login
      // navigate('/user/login');
    } else if (response.status === 404) {
      console.error('Failed to add to wishlist: NOT FOUND');
      alert('The wishlist endpoint was not found.');
    } else {
      console.error('Failed to add to wishlist:', await response.text());
    }
    return false;
  } catch (error) {
    console.error('Error adding to wishlist:', error);
    alert('An error occurred while adding to wishlist.');
    return false;
  }
};

export default AddToWishlist;
