import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { AppText, Icon } from './';

export default function CategoryPickerItem({ item, onPress })
{
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress}>
                <Icon name={item.icon} size={80} backgroundColor={item.backgroundColor} iconColor={item.backgroundColor} />
            </TouchableOpacity>
            <AppText style={styles.label}>{item.label}</AppText>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        paddingVertical: 15,
        alignItems: 'center',
        width: '33%',
    },
    label: {
        marginTop: 5,
        textAlign: 'center',
    }
});
