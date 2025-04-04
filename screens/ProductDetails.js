// import React, { useContext } from 'react';
// import { View, Text, Image, Button, StyleSheet } from 'react-native';
// import { StoreContext } from '../context/StoreContext';

// const ProductDetails = ({ route }) => {
//   const { product } = route.params;
//   const { addToCart, addToWishlist } = useContext(StoreContext);

//   return (
//     <View style={styles.container}>
//       <Image source={{ uri: product.image }} style={styles.image} />
//       <Text style={styles.title}>{product.title}</Text>
//       <Text>{product.description}</Text>
//       <Text style={styles.price}>${product.price}</Text>
//       <Button title="Add to Cart" onPress={() => addToCart(product)} />
//       <Button title="❤️ Add to Wishlist" onPress={() => addToWishlist(product)} />
//     </View>
//   );
// };

// import React from 'react';
// import { View, Text, Image, Button, StyleSheet } from 'react-native';
// import { StoreContext } from '../context/StoreContext';

// const ProductDetails = ({ route }) => {
//   const { product } = route.params;
//   const { addToCart, addToWishlist } = useContext(StoreContext);

//   return (
//     <View style={styles.container}>
//       <Image source={{ uri: product.image }} style={styles.image} />
//       <Text style={styles.title}>{product.title}</Text>
//       <Text>{product.description}</Text>
//       <Text style={styles.price}>Rs.{product.price}</Text>
//       <Button title="Add to Cart" onPress={() => {}} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { padding: 20 },
//   image: { height: 200, resizeMode: 'contain' },
//   title: { fontSize: 18, fontWeight: 'bold' },
//   price: { fontSize: 16, marginVertical: 10 },
// });

// export default ProductDetails;

import React, { useContext } from 'react';
import { View, Text, Image, Button, ScrollView, StyleSheet } from 'react-native';
import { CartContext } from '../context/CartContext';
import { WishlistContext } from '../context/WishlistContext';

export default function ProductDetails({ route }) {
  const { product } = route.params;
  const { addToCart } = useContext(CartContext);
  const { addToWishlist, removeFromWishlist, isInWishlist } = useContext(WishlistContext);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>${product.price}</Text>
      <Text style={styles.desc}>{product.description}</Text>

      <Button title="Add to Cart" onPress={() => addToCart(product)} />
      <View style={{ marginTop: 10 }}>
        <Button
          title={isInWishlist(product.id) ? 'Remove from Wishlist' : 'Add to Wishlist'}
          onPress={() =>
            isInWishlist(product.id)
              ? removeFromWishlist(product.id)
              : addToWishlist(product)
          }
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  image: { width: '100%', height: 300, resizeMode: 'contain' },
  title: { fontSize: 20, fontWeight: 'bold', marginVertical: 10 },
  price: { fontSize: 18, marginBottom: 10 },
  desc: { fontSize: 14, lineHeight: 20 },
});
