import React from 'react';
import { Image, Platform, StyleSheet, TouchableHighlight, View } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../config/colors';
import AppText from '../AppText';
export default function ListItem({ image, title, subTitle, onPress, IconComponent, renderRightActions, icon })
{
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
                <View style={styles.container}>
                    {IconComponent}
                    <Image style={styles.image} source={image} />
                    <View style={styles.detailsContainer}>
                        <AppText style={styles.title} numberOfLines={1}>{title}</AppText>
                        {subTitle && <AppText style={styles.subTitle} numberOfLines={2}>{subTitle}</AppText>}

                    </View>
                    <MaterialCommunityIcons color={colors.medium} name={icon} size={25} />
                </View>
            </TouchableHighlight>
        </Swipeable>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'row',
        padding: 15,
    },

    detailsContainer: {
        flex: 1,
        marginLeft: 10,
        justifyContent: 'center',
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    title: {
        color: colors.black,
        opacity: 0.8,
        fontWeight: '600',
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
        fontSize: 18,
    },
    subTitle: {
        color: colors.medium,
        fontSize: 15,
    }
});
