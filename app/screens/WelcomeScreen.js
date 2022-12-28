import { Image, ImageBackground, Linking, StatusBar, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { AppButton, Icon } from '../components';
import colors from '../config/colors';

export default function WelcomeScreen({ navigation })
{
  return (
    <>
      <StatusBar translucent={true} backgroundColor={colors.transparent} />

      <ImageBackground
        style={styles.background} blurRadius={10}
        source={require('../assets/background.jpg')}>

        <View style={styles.logoContainer}>
          <Image source={require('../assets/logo.png')} style={styles.logo} fadeDuration={1000} />
          <Text style={styles.tagline}>Don't Sell without Buying</Text>
        </View>

        <View style={{ flexDirection: 'row', }}>
          <TouchableOpacity style={{ marginVertical: 20, marginHorizontal: 20, }} onPress={() => navigation.navigate('Camera')}>
            <Icon name='camera' size={50} backgroundColor={colors.medium} iconColor={colors.white} />
          </TouchableOpacity>
          <TouchableOpacity style={{ marginVertical: 20, marginHorizontal: 20, }} onPress={() => Linking.openSettings()}>
            <Ionicons name='settings' size={50} backgroundColor={colors.medium} color={colors.white} />
          </TouchableOpacity>
        </View>

        <AppButton title='register' onPress={() => navigation.navigate('Register')} color='secondary' />

        <AppButton title='OnBoard' onPress={() => navigation.navigate('OnBoard')} color='primary' />

        <AppButton title='login' onPress={() => navigation.navigate('Login')} />
      </ImageBackground>

    </>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  logo: {
    width: '100%',
    height: 80,
  },

  logoContainer: {
    alignItems: 'center',
    position: 'absolute',
    top: 50,
  },

  tagline: {
    fontSize: 25,
    fontWeight: '600',
    paddingVertical: 20,
  }




});
