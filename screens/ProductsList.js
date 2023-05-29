import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ImageBackground, TextInput} from 'react-native';

import { Product } from '../components/Product.js';
import { getProducts,fetchProductsFromFirestore } from '../services/ProductsService.js';

export function ProductsList({ navigation }) {
  const [searchQuery, setSearchQuery] = useState('');
  
  function renderProduct({ item: product }) {
    if (searchQuery && !product.name.toLowerCase().includes(searchQuery.toLowerCase())) {
      return null;
    }
    return (
      <Product
        {...product}
        onPress={() => {
          navigation.navigate('ProductDetails', {
            productId: product.id,
          });
        }}
      />
    );
  }

  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(getProducts());
  });
  

  return (
    <ImageBackground
      source={require('../assets/products/background-image.jpg')}
      style={styles.backgroundImage}
    >
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="chercher un produit...."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>
      <FlatList
        style={styles.productsList}
        contentContainerStyle={styles.productsListContainer}
        keyExtractor={(item) => item.id.toString()}
        data={products}
        renderItem={renderProduct}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  productsList: {
    backgroundColor: 'transparent',
  },
  productsListContainer: {
    backgroundColor: 'transparent',
    paddingVertical: 8,
    marginHorizontal: 8,
  },
  searchContainer: {
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  searchInput: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    paddingHorizontal: 16,
    height: 40,
  },
});
