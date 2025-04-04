import React, { useContext } from 'react';
import { View, Text, FlatList } from 'react-native';
import { WishlistContext } from '../context/WishlistContext';

export default function WishlistScreen() {
  const { wishlist } = useContext(WishlistContext);

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Wishlist</Text>
      <FlatList
        data={wishlist}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <Text>{item.title}</Text>
        )}
      />
    </View>
  );
}
