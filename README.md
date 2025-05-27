**E-Commerce Product Listing App Solution Submission**

**Details of Solution**
This is a React Native mobile application built using Expo. The app fetches product data from the FakeStore API, displays products in a list/grid view, and includes a product details screen with options to add items to cart or wishlist. The app supports navigation across multiple screens and utilizes AsyncStorage to persist cart and wishlist data.

**Deployment Notes**

**Framework**: React Native (Expo)

**Navigation**: React Navigation

**State Persistence**: AsyncStorage

**API Used**: https://fakestoreapi.com/products

**How to Execute the Solution**
1. Node.js installed
2. Expo CLI installed:
3. Install Dependencies:cd ECommerceApp
4. npm install
5. Start the Development Server:npx expo start
6. Run the App
7. Press w to run on Web.

**Approach**
1. Fetched product data from FakeStore API using fetch().
2. Displayed products using FlatList in a 2-column grid layout.
3. Created a Product Details screen with an image, description, and price.
4. Added "Add to Cart" and "Add to Wishlist" buttons with AsyncStorage support.
5. Implemented Cart screen:
   1. Shows all added items.
   2. Allows removal of items.
   3. Shows total cart amount dynamically.
6. Implemented Wishlist screen:
   1. Shows saved favorite products.
   2. Allows removal from wishlist.
7. Used React Navigation for screen transitions.
8. Home screen includes buttons to visit Cart and Wishlist.
