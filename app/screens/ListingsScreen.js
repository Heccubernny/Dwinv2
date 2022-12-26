import React from 'react'
import { FlatList, StyleSheet } from 'react-native'
import { Card, Screen } from '../components'

import colors from '../config/colors'
export default function ListingsScreen()
{
    const listings = [
        {
            id: 1,
            title: 'Product 1',
            price: 100000,
            image: require('../assets/profile1.png'),
        },

        {
            id: 2,
            title: 'Product 2',
            price: 100000,
            image: require('../assets/profile2.png'),
        }, {
            id: 3,
            title: 'Product 3',
            price: 100,
            image: require('../assets/profile3.png'),
        }, {
            id: 4,
            title: 'Product 4',
            price: 100,
            image: require('../assets/profile4.png'),
        },
        {
            id: 5,
            title: 'Product 5',
            price: 100000,
            image: require('../assets/profile1.png'),
        },

        {
            id: 6,
            title: 'Product 6',
            price: 100000,
            image: require('../assets/profile2.png'),
        }, {
            id: 7,
            title: 'Product 7',
            price: 100,
            image: require('../assets/profile3.png'),
        }, {
            id: 8,
            title: 'Product 8',
            price: 100,
            image: require('../assets/profile4.png'),
        },
    ]

    return (
        <Screen style={styles.screen}>
            <FlatList
                data={listings}
                keyExtractor={listing => listing.id.toString()}
                renderItem={({ item }) =>
                    <Card
                        title={item.title}
                        subTitle={'₦‎' + item.price}
                        image={item.image}
                    />
                }

            />
        </Screen>
    )
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
        backgroundColor: colors.light,
    },

});
