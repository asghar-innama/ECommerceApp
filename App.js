import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import ProductDetails from './screens/ProductDetails';
import CartScreen from './screens/CartScreen';
import WishlistScreen from './screens/WishlistScreen';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <CartProvider>
      <WishlistProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="ProductDetails" component={ProductDetails} />
            <Stack.Screen name="Cart" component={CartScreen} />
            <Stack.Screen name="Wishlist" component={WishlistScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </WishlistProvider>
    </CartProvider>
  );
}
