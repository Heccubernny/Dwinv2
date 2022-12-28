import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../config/colors';


export default function ViewImageScreen()
{

    return (
        <View style={styles.container}>

            <View style={styles.closeIcon}>
                <MaterialCommunityIcons name="close" color="white" size={30} />
            </View>
            <View style={styles.deleteIcon}>
                <MaterialCommunityIcons name="delete" color="white" size={30} />
            </View>

            <Image resizeMode='contain' style={styles.image} source={require('../assets/chair.jpg')} />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.main,
    },
    closeIcon: {
        position: 'absolute',
        top: 40,
        left: 30,
    },
    deleteIcon: {
        position: 'absolute',
        top: 40,
        right: 30,
    },
    image: {
        width: '100%',
        height: '100%',
        // marginLeft: 20,
        // marginRight: 20,
        alignSelf: 'center',
    }
});
