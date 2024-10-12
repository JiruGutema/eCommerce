Here’s an updated README that reflects the use of Yarn for package management:

# eCommerce App

This is a full-stack eCommerce application built with React for the frontend and Node.js, Express, and MongoDB for the backend. Users can browse products, add them to a shopping cart, and view the cart contents.

## Features

- **Frontend**:

  - **Product Listing**: Users can view a list of available products.
  - **Add to Cart**: Users can add products to their shopping cart.
  - **Cart Management**: Users can view their cart contents.
  - **Alerts**: Users receive feedback when items are added to the cart or if a product is already in the cart.

- **Backend**:
  - **RESTful API**: Built with Express.js to handle requests and serve product data.
  - **MongoDB**: Used to store product information and manage the shopping cart.

## Technologies Used

- **Frontend**:

  - **React**: JavaScript library for building user interfaces.
  - **React Router**: For navigation between different pages (Home and Cart).
  - **CSS**: For styling the application.

- **Backend**:
  - **Node.js**: JavaScript runtime for building the server.
  - **Express.js**: Web framework for Node.js to build the API.
  - **MongoDB**: NoSQL database to store product data.

## Installation

To get started with this application, follow these steps:

### Frontend

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/JiruGutema/eCommerce.git
   cd eCommerce/frontend
   ```

2. **Install Dependencies**:

   ```bash
   yarn install
   ```

3. **Run the Frontend Application**:
   ```bash
   yarn start
   ```

### Backend

1. **Navigate to the Backend Directory**:

   ```bash
   cd ../backend
   ```

2. **Install Dependencies**:

   ```bash
   yarn install
   ```

3. **Set Up Environment Variables**:

   - Create a `.env` file and add your MongoDB connection string:
     ```
     MONGODB_URI=your_mongodb_connection_string
     PORT=5000
     ```

4. **Run the Backend Application**:

   ```bash
   yarn start
   ```

5. Open your browser and navigate to `http://localhost:3000` for the frontend and `http://localhost:5000` for the backend API.

## Usage

1. **Viewing Products**: Navigate to the home page to see the list of products fetched from the backend.
2. **Adding Products to Cart**: Click on "Add to Cart" to add a product. An alert will display confirming the action.
3. **Cart Notifications**: If you try to add a product that is already in the cart, you will receive a notification indicating that the product is already added.

## Alerts

Alerts are displayed temporarily when an action occurs, such as adding an item to the cart. The message will disappear after a few seconds.

## Contributing

If you would like to contribute to this project, feel free to submit a pull request.
