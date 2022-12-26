import { Image, StyleSheet } from 'react-native';
import * as Yup from 'yup';
import { Screen } from '../components';
import { AppForm, AppFormField, SubmitButton } from '../components/forms';
import colors from '../config/colors';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label('Password'),
});

export default function LoginScreen({ navigation })
{
    return (
        <Screen style={styles.container}>
            <Image source={require('../assets/logo.png')} style={styles.logo} />
            <AppForm
                initialValues={{ email: 'text@example.com', password: 'examplebiou' }}
                onSubmit={values =>
                {
                    navigation.navigate('ListingEdit');
                    console.log(values)
                }}
                validationSchema={validationSchema}
            >
                <AppFormField
                    autoCapitalize='none'
                    autoCorrect={false}
                    icon='email'
                    keyboardType='email-address'
                    name='email'
                    placeholder='Email'
                    placeholderTextColor={colors.medium}
                    textContentType='emailAddress'
                />

                <AppFormField
                    autoCapitalize='none'
                    autoCorrect={false}
                    icon='lock'
                    placeholder='Password'
                    placeholderTextColor={colors.medium}
                    secureTextEntry
                    textContentType='password'
                    name='password'
                />

                <SubmitButton title='Login' />
            </AppForm>

        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: colors.white,
    },

    logo: {
        width: 100,
        height: 34,
        alignSelf: 'center',
        // marginTop: 50,
        // marginBottom: 20,
        marginVertical: 100,
    },
});
