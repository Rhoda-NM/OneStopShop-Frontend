![alt text](src/components/assets/onestoplogo.svg)
## One Stop Products Platform Frontend

Table of Contents
Overview
Features
Project Structure
Installation
Usage
Components
State Management
API Integration
Styling
Testing
Contributing
License
## Overview
Welcome to the One Stop Products Platform Frontend repository! This project is the frontend of a comprehensive e-commerce platform designed to offer users an intuitive and seamless shopping experience. Built using React, Redux Toolkit, and Styled Components, the platform is robust, scalable, and fully responsive.

## Features
1. User Authentication: Secure login and registration with JWT-based authentication.
2. Product Listing: Dynamic product catalog with search, filters, and sorting options.
3. Product Details: Detailed product pages with images, ratings, reviews, and related items.
4. Shopping Cart: Add, remove, and update product quantities with real-time price updates.
5. Wishlist: Save your favorite items for later.
6. Checkout Process: Streamlined checkout flow with payment integration.
7. Admin Dashboard: Manage products, orders, and user accounts.
8. Responsive Design: Optimized for both desktop and mobile devices.
9. SEO Friendly: Meta tags, Open Graph, and structured data implemented for better search engine visibility.

## Project Structure
OneStopShop-Frontend/
│
├── public/                 # Static assets
│   └── index.html          # HTML entry point
│
├── src/
│   ├── components/         # Reusable React components
│   ├── pages/              # Application pages (Home, ProductDetails, Cart, etc.)
│   ├── stores/             # Redux Toolkit stores for state management
│   ├── utils/              # Utility functions
│   ├── App.js              # Main app component
│   ├── index.js            # React entry point
│   └── ...                 # Other config files and assets
│
├── .env                    # Environment variables
├── package.json            # Dependencies and scripts
├── README.md               # Project documentation
└── ...                     # Other config files (ESLint, Prettier, etc.)
## Installation
To get started with the project, follow these steps:

## Clone the Repository:
1. git clone https://github.com/Rhoda-NM/OneStopShop-Frontend.git

## Navigate to the Project Directory:
2. cd OneStopShop-Frontend

## Install Dependencies:
3. Make sure you have Node.js installed, then run:
**npm install**

## Set Up Environment Variables:
4. Create a .env file in the root directory and add necessary environment variables:

    REACT_APP_API_URL=http://localhost:5000/api

## Start the Development Server:
**npm start**
This will run the app in development mode. Open http://localhost:3000 to view it in the browser.

## Usage
Running the Application
Once the development server is running, you can explore the various features of the platform:

1. Home Page: Browse the product catalog.
2. Product Details: Click on a product to view detailed information, including images, descriptions, and reviews.
3. Shopping Cart: Add products to your cart and proceed to checkout.
4. Admin Dashboard: If you have admin privileges, manage products, orders, and users from the dashboard.

## Building for Production
To create an optimized build for production, run:
**npm run build**
The build folder will contain the optimized app ready for deployment.

## Components
## Header
The Header component provides navigation links and access to the user profile and cart. It’s responsive and adapts to mobile screens.

## Footer
The Footer component contains useful links, contact information, and social media icons.

## ProductDetails
The ProductDetails component is the core of the product detail page, displaying images, ratings, reviews, and related products.

## Cart
The Cart component manages the shopping cart, allowing users to add, remove, and adjust quantities of items.

## State Management
The project uses Redux Toolkit for efficient state management. The stores are organized as follows:

1. cart: Manages the state of the shopping cart.
2. products: Handles product data, including fetching, searching, and filtering.
3. user: Manages user authentication and profile information.

## Sample Redux Store Configuration
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cart';
import productsReducer from './products';
import userReducer from './user';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
    user: userReducer,
  },
});
## API Integration
All data is fetched from the backend API, which is built using Flask. The API endpoints include:

GET /api/products: Fetch the list of products.
GET /api/products/:id: Fetch detailed information about a specific product.
POST /api/cart: Add items to the shopping cart.
POST /api/auth/login: Authenticate users.

## Styling
The project uses Styled Components for styling React components. This approach allows for scoped and dynamic styling, ensuring that styles are only applied to the components that need them.

## Testing
Testing is an important part of the development process. The project uses Jest and React Testing Library for unit and integration tests.

## Running Tests
To run the tests, simply execute:
        **npm test**
This will run all tests and output the results in the terminal.
## Contributing
We welcome contributions to the project! If you have an idea for a feature, or if you've found a bug, feel free to open an issue or submit a pull request.

## Contributors

- **Scrum Master**: [Rhoda Muya](https://github.com/Rhoda-NM)
- **Group Members**:
  - [Mariya Mwanjiru](https://github.com/mwanjiru12)
  - [Bravin Kibet](https://github.com/Bravinkibet)
  - [Ephy Muiruri](https://github.com/Ephymuiruri)
  - [Brian Onduso](https://github.com/BrianOnduso0)
  - [Lennis Maina](https://github.com/Maichmaina)


## Contribution Guidelines
1.Fork the repository.
2.Create a new branch with your feature.
3.Commit your changes and push to your fork.
4.Submit a pull request with a detailed explanation of your changes.
## License
This project is licensed under the MIT License - see the LICENSE file for details.

