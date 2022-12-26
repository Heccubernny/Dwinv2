import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { Card, Screen } from '../components';
export default function ProductScreen({ navigation })
{

  const products = [
    {
      id: 1,
      title: 'Product 1',
      price: 100000,
      image: require('../assets/profile1.png'),
      currency: "₦‎",
      onPress: () => navigation.navigate('Details')
    },

    {
      id: 2,
      title: 'Product 2',
      price: 100000,
      image: require('../assets/profile2.png'),
      currency: "₦‎",
      onPress: () => navigation.navigate('Listing')
    }, {
      id: 3,
      title: 'Product 3',
      price: 100,
      currency: "₦‎",
      image: require('../assets/profile3.png'),
    }, {
      id: 4,
      title: 'Product 4',
      price: 100,
      currency: "₦‎",
      image: require('../assets/profile4.png'),
    },
    {
      id: 5,
      title: 'Product 5',
      price: 100000,
      currency: "₦‎",
      image: require('../assets/profile1.png'),
    },

    {
      id: 6,
      title: 'Product 6',
      price: 100000,
      currency: "₦‎",
      image: require('../assets/profile2.png'),
    }, {
      id: 7,
      title: 'Product 7',
      price: 100,
      currency: "₦‎",
      image: require('../assets/profile3.png'),
    }, {
      id: 8,
      title: 'Product 8',
      price: 100,
      currency: "₦‎",
      image: require('../assets/profile4.png'),
    },
  ]



  return (
    <Screen style={styles.screen}>

      <FlatList
        data={products}
        keyExtractor={product => product.id.toString()}
        renderItem={({ item }) =>
          <Card
            title={item.title}
            subTitle={item.price}
            image={item.image}
            currency={item.currency}
            onPress={item.onPress}
          />
        }
      />

    </Screen>


  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#f8f4f4',
    padding: 20,
    // paddingTop: 100,
    // paddingBottom: 100,
    height: '100%',
  }
});
