
// import { View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { TailwindProvider } from 'tailwind-rn';
import
{
  AccountScreen,
  ListingDetailsScreen, ListingEditScreen, ListingsScreen,
  LoginScreen,
  MessagesScreen,
  ProductScreen,
  RegisterScreen,
  ViewImageScreen,
  WelcomeScreen
} from "./app/screens";

import Camera from "./app/screens/CameraScreen";
import utilities from './tailwind.json';

const Stack = createNativeStackNavigator();

export default function App()
{
  return (
    <>
      <GestureHandlerRootView style={{ flex: 1 }}>{
        <TailwindProvider utilities={utilities}>
          <NavigationContainer>

            {/* </> */}
            {/* <DetailsScreen /> */}
            {/* <Screen/> */}
            {/* <Screen /> */}
            <Stack.Navigator initialRouteName="Home">
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

              <Stack.Screen options={{ headerShown: false }} name="Camera" component={Camera} />


            </Stack.Navigator>
          </NavigationContainer>
        </TailwindProvider>
      }
      </GestureHandlerRootView>
    </>
  )
}
