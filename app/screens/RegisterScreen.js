import { StatusBar, StyleSheet, Text } from 'react-native';
import { Screen } from '../components';
import colors from '../config/colors';
export default function RegisterScreen()
{
    return (
        <>
            <StatusBar translucent={false} />

            <Screen style={styles.container}>
                <Text style={styles.text} >RegisterScreen</Text>
            </Screen>
        </>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 10,
        backgroundColor: colors.white,
    },

    text: {
        color: colors.medium,
    }
});
