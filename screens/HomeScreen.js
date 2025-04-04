import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, ActivityIndicator, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      }).catch(err => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <ActivityIndicator size="large" style={{ flex: 1 }} />;

  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id.toString()}
      numColumns={2}
      contentContainerStyle={{ padding: 10 }}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('ProductDetails', { product: item })}
        >
          <Image source={{ uri: item.image }} style={styles.image} />
          <Text numberOfLines={2} style={styles.title}>{item.title}</Text>
          <Text>${item.price}</Text>
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  card: { flex: 1, margin: 8, backgroundColor: '#f9f9f9', padding: 10, borderRadius: 10 },
  image: { height: 100, resizeMode: 'contain' },
  title: { fontWeight: 'bold', fontSize: 14, marginVertical: 5 },
});
