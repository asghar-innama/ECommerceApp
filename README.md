E-Commerce Product Listing App Solution Submission

Details of Solution
This is a React Native mobile application built using Expo. The app fetches product data from the FakeStore API, displays products in a list/grid view, and includes a product details screen with options to add items to cart or wishlist. The app supports navigation across multiple screens and utilizes AsyncStorage to persist cart and wishlist data.
Deployment Notes
Framework: React Native (Expo)
Navigation: React Navigation
State Persistence: AsyncStorage
API Used: https://fakestoreapi.com/products
How to Execute the Solution
Node.js installed
Expo CLI installed:
Install Dependencies:cd ECommerceApp
npm install
Start the Development Server:npx expo start
Run the App
Press w to run on Web.
Approach
Fetched product data from FakeStore API using fetch().
Displayed products using FlatList in a 2-column grid layout.
Created a Product Details screen with an image, description, and price.
Added "Add to Cart" and "Add to Wishlist" buttons with AsyncStorage support.
Implemented Cart screen:
Shows all added items.
Allows removal of items.
Shows total cart amount dynamically.
Implemented Wishlist screen:
Shows saved favorite products.
Allows removal from wishlist.
Used React Navigation for screen transitions.
Home screen includes buttons to visit Cart and Wishlist.
