import { StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../config/colors';
import AppText from './AppText';

export default function PickerItem({ item, onPress })
{
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <AppText style={styles.text}>{item.label}</AppText>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 5,
        flex: 1,
        marginTop: 5,
        flexDirection: 'column',
        alignItems: 'center',
        justifyItems: 'center',

    },

    text: {
        flexWrap: 'wrap',
        backgroundColor: colors.secondary,
        fontWeight: 'bold',
        color: colors.white,
        width: 'auto',
        height: 'auto',
        marginHorizontal: 10,
        paddingVertical: 10,
        paddingHorizontal: 10,
        textAlign: 'center',
        borderRadius: 15,

        // padding: 35,
        // paddingVertical: 10,
        // paddingHorizontal: 20,
    }

});
