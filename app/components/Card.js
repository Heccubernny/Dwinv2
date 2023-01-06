import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import colors from '../config/colors';
import AppText from './AppText';
export default function Card({ title, subTitle, currency, image, onPress })
{
    return (
        <View style={styles.card}>
            <Image source={image} style={styles.image} />
            <View styles={styles.detailsContainer}>
                <TouchableOpacity activeOpacity={0.7}
                    underlayColor={colors.black} onPress={onPress}>
                    <AppText style={styles.title} numberOfLines={1}>{title}</AppText>
                    <AppText style={styles.subTitle} numberOfLines={2}>{currency}{subTitle}</AppText>
                </TouchableOpacity>
            </View>
        </View >
    );
}

const styles = StyleSheet.create({

    card: {
        borderRadius: 15,
        backgroundColor: colors.white,
        marginBottom: 20,
        // overflow: 'hidden',
        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
        transition: '0.3s',
        width: '100%',
    },

    image: {
        width: '100%',
        height: 200,


    },

    detailsContainer: {
        padding: 50,

    },

    title: {
        color: colors.black,
        fontSize: 18,
        fontWeight: '700',
        paddingTop: 20,
        paddingLeft: 10,

    },

    subTitle: {
        color: colors.secondary,
        fontSize: 15,
        fontWeight: 'bold',
        paddingTop: 2,
        paddingLeft: 10,
        paddingBottom: 20,

    }


});
