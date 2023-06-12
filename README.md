# Q-mart

This is a web application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack to sell luxury clothes and garments. The app provides a platform for users to browse and purchase high-end fashion items from various luxury brands.

## Features

- User Registration and Authentication: Users can create an account and log in to access personalized features such as shopping cart, order history, and wishlists.
- Product Catalog: Display a wide range of luxury clothes and garments with detailed descriptions, images, and pricing.
- Shopping Cart: Users can add items to their cart, update quantities, and proceed to checkout.
- Order Management: Admins can manage orders, update order statuses, and generate invoices.
- Wishlist: Users can save desired items to their wishlist for future reference.
- Search and Filtering: Users can search for specific products and apply filters based on brand, category, price range, etc.
- Payment Integration: Seamless integration with popular payment gateways for secure and convenient transactions.
- User Reviews and Ratings: Users can provide reviews and ratings for products they have purchased.
- Admin Dashboard: Admins have access to a dashboard to manage products, users, orders, and website settings.

## Installation

1. Clone the repository:
    git clone https://github.com/your-username/luxury-clothes-webapp.git
   
2. Install backend dependencies
    cd luxury-clothes-webapp/backend
    npm install

3. Install frontend dependencies:
    cd ../frontend
    npm install

4. Configure environment variables:

    Create a .env file in the backend directory.
    Set the following variables:  
      PORT=3000
      MONGO_URI=your-mongodb-connection-string
      SECRET_KEY=your-secret-key
      
 5. Run the development server:
   Start the backend server:
    cd backend
    npm start
    
   Start the frontend development server in a separate terminal:
    cd frontend
    npm start

6.Open your browser and navigate to http://localhost:3000 to access the web app

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please feel free to submit a pull request.


##LICENSE

This project is licensed under the MIT License.


Please note that you may need to update the installation steps and environment variables according to your specific project setup.
