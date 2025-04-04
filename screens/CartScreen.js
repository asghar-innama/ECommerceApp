import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CartScreen = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchCart = async () => {
      const data = await AsyncStorage.getItem('cart');
      if (data) setCart(JSON.parse(data));
    };
    fetchCart();
  }, []);

  const removeFromCart = async (id) => {
    const newList = cart.filter(item => item.id !== id);
    setCart(newList);
    await AsyncStorage.setItem('cart', JSON.stringify(newList));
  };

  const getTotal = () => {
    return cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);
  };

  return (
    <View>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text>{item.title}</Text>
            <Text>${item.price}</Text>
            <Button title="Remove from Cart" onPress={() => removeFromCart(item.id)} />
          </View>
        )}
      />
      <Text style={styles.total}>Total: ${getTotal()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: { padding: 10, margin: 10, backgroundColor: '#e6f2ff' },
  image: { width: 100, height: 100 },
  total: { fontSize: 18, fontWeight: 'bold', textAlign: 'center', marginTop: 10 },
});

export default CartScreen;
