# Houseplant Shop Prototype

Welcome to the **Houseplant Shop**! This is a React-based e-commerce web application designed for buying various types of houseplants. The project uses Redux for state management, React Router for navigation, and basic styling for a fresh and pleasant user interface.

## Features

- **Landing Page**: Introduction to the store and a button to navigate to the product listing.
- **Product Listing**: Displays different plant categories (Succulents, Indoor, Outdoor) and individual products with an option to add to the cart.
- **Shopping Cart**: Allows users to view items in their cart, update the quantity, remove items, and see the total cost.

## Tech Stack

- **React**: JavaScript library for building user interfaces.
- **Redux**: State management tool to handle the cart and other global state.
- **React Router**: For navigation between pages (Landing Page, Product Listing, and Shopping Cart).
- **CSS**: For styling the application with a nature-inspired, fresh design.

## Setup

To get started with this project on your local machine, follow the steps below:

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/en/) installed.

### Install Dependencies

1. Clone the repository:

   ```bash
   git clone https://github.com/tjsyte/houseplant-shop.git
   cd houseplant-shop
   ```
2. Install the required dependencies:

   ```bash
   npm install
   ```
### Run the Application
To start the development server and run the app locally:

   ```bash
   npm start
   ```
This will open the application in your default browser at http://localhost:3000.

### Project Structure
Here's an overview of the project directory:

```bash
houseplant-shop/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   └── Header.js
│   ├── pages/
│   │   ├── LandingPage.js
│   │   ├── ProductListingPage.js
│   │   └── ShoppingCartPage.js
│   ├── redux/
│   │   └── actions.js
│   │   └── reducers.js
│   │   └── store.js
│   ├── App.css
│   └── App.js
├── .gitignore
├── package.json
└── README.md

