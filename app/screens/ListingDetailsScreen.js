import React, { useState } from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { AppPicker, AppText } from '../components';
import { AppTextInput } from '../components/forms';
import { ListItem } from "../components/lists";
import colors from "../config/colors";

export default function ListDetailsScreen({ title, price, currency, navigation })
{
    const categories = [
        { label: 'Furniture', value: 1 },
        { label: 'Clothing', value: 2 },
        { label: 'Cameras', value: 3 },
    ];

    const [ category, setCategory ] = useState(categories[ 0 ]);



    return (
        <View style={styles.container}>
            <TouchableOpacity styles={styles.detailsContainer} onPress={() => navigation.navigate('ViewImage')}>

                <Image style={styles.image} source={require('../assets/chair.jpg')}></Image>
            </TouchableOpacity>

            <AppPicker items={categories} placeholder={'Choose an story'} icon={'apps'} selectedItem={category} onSelectItem={item => setCategory(item)} />

            <AppTextInput placeholder="Create your story" placeholderTextColor={colors.medium} icon={'email'} />
            <View styles={styles.detailsContainer}>
                <AppText style={styles.title}>{title}</AppText>
                <AppText style={styles.price}>{currency}{price}</AppText>
                <TouchableOpacity onPress={() => navigation.navigate('Messages')}>
                    <View style={styles.userContainer}>
                        <ListItem image={require("../assets/profile2.png")} title="Heccubernny" subTitle="20 Products" />
                    </View>
                </TouchableOpacity>
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
    },

    image: {
        width: '100%',
        height: 300,
    },

    detailsContainer: {
        padding: 50,

    },

    title: {
        color: colors.black,
        opacity: 0.75,
        fontSize: 18,
        fontWeight: '700',
        paddingTop: 20,
        paddingLeft: 10,

    },

    price: {
        color: colors.secondary,
        opacity: 0.75,
        fontSize: 15,
        fontWeight: 'bold',
        marginVertical: 10,
        marginHorizontal: 10,

    },
    userContainer: {
        marginVertical: 40,
    }
});
