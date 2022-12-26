import React from 'react';
import { StyleSheet, View } from 'react-native';
import colors from '../../config/colors';
export default function ListItemSeparator()
{
    return (<View style={styles.itemSeparatorComponent} />)
}

const styles = StyleSheet.create({
    itemSeparatorComponent: {
        width: '100%',
        height: 1,
        backgroundColor: colors.light,
    },
});
