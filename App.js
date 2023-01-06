
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import
{
  AccountScreen, FindHouseScreen, ListingDetailsScreen, ListingEditScreen, ListingsScreen,
  LoginScreen,
  MessagesScreen, OnBoardScreen, ProductScreen,
  RegisterScreen,
  ViewImageScreen,
  WelcomeScreen
} from "./app/screens";
import { SplashScreen } from './app/screens/SplashScreen';

import { useEffect, useState } from 'react';
import BackgroundImage from "./app/screens/BackgroundImage";
import Camera from "./app/screens/CameraScreen";

const Stack = createNativeStackNavigator();

export default function App()
{

  const [ isAppReady, setIsAppReady ] = useState(false);
  useEffect(() =>
  {
    setTimeout(() => setIsAppReady(true), 2000);
  }, []);
  return (
    <>
      <SplashScreen isAppReady={isAppReady}>
        <GestureHandlerRootView style={{ flex: 1 }}>{
          <NavigationContainer>

            {/* </> */}
            {/* <DetailsScreen /> */}
            {/* <Screen/> */}
            {/* <Screen /> */}
            <StatusBar translucent={false} />

            <Stack.Navigator initialRouteName="Home">
              <Stack.Screen options={{ headerShown: false }} name="Testing" component={BackgroundImage} />
              <Stack.Screen options={{ headerShown: false }} name="Home" component={WelcomeScreen} />
              <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
              <Stack.Screen options={{ headerShown: false }} name="Register" component={RegisterScreen} />


              <Stack.Screen options={{ headerShown: false }} name="Product" component={ProductScreen} />

              <Stack.Screen options={{ headerShown: false }} name="Details">
                {(props) => <ListingDetailsScreen {...props} title="Devan Pink Sofa" price="100,000" currency="₦‎" />}
              </Stack.Screen>
              <Stack.Screen options={{ headerShown: false }} name="ViewImage" component={ViewImageScreen} />
              <Stack.Screen options={{ headerShown: false }} name="Messages" component={MessagesScreen} />
              <Stack.Screen options={{ headerShown: false }} name="Account" component={AccountScreen} />
              <Stack.Screen options={{ headerShown: false }} name="Listing" component={ListingsScreen} />
              <Stack.Screen options={{ headerShown: false }} name="ListingEdit" component={ListingEditScreen} />
              <Stack.Screen options={{ headerShown: false }} name="OnBoard" component={OnBoardScreen} />
              <Stack.Screen options={{ headerShown: false }} name="FindHouse" component={FindHouseScreen} />
              <Stack.Screen options={{ headerShown: false }} name="Camera" component={Camera} />


            </Stack.Navigator>
          </NavigationContainer>
        }
        </GestureHandlerRootView>
      </SplashScreen>

    </>
  )
}
