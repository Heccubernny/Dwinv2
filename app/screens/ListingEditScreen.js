import Geolocation from '@react-native-community/geolocation';
import { useState } from 'react';
import { Alert, StyleSheet } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import * as Yup from 'yup';
import { CategoryPickerItem, Screen } from '../components';
import { AppForm, AppFormField, AppFormPicker, SubmitButton } from '../components/forms';
import AppFormImagePicker from '../components/forms/AppFormImagePicker';
import colors from '../config/colors';
import data from '../config/data';


export default function ListingEditScreen({ navigation })
{
    // const [ currentLongitude, setCurrentLatitude ] = useState('...');
    // const [ currentLatitude, setCurrentLongitude ] = useState('...');
    // const [ locationStatus, setLocationStatus ] = useState('');

    // useEffect(() =>
    // {
    //     const requestLocationPermission = async () =>
    //     {
    //         if (Platform.OS === 'ios')
    //         {
    //             getOneTimeLocation();
    //             subscribeLocationLocation();
    //         } else
    //         {
    //             try
    //             {
    //                 const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION, {
    //                     'title': 'Location Access Required',
    //                     'message': 'This App needs to Access your location'
    //                 },);
    //                 if (granted === PermissionsAndroid.RESULTS.GRANTED)
    //                 {
    //                     getOneTimeLocation();
    //                     subscribeLocationLocation();
    //                 } else
    //                 {
    //                     setLocationStatus('Location Permission Denied');
    //                 }
    //             } catch (error)
    //             {
    //                 console.log(error);
    //             }
    //         }
    //     };

    //     requestLocationPermission();
    //     return () =>
    //     {
    //         Geolocation.clearWatch(watchID);
    //     };
    // }, []);

    // const getOneTimeLocation = () =>
    // {
    //     setLocationStatus('Getting Location ...');
    //     Geolocation.getCurrentPosition((position) =>
    //     {
    //         setLocationStatus('You are Here');
    //         const currentLongitude = JSON.stringify(position.coords.longitude);
    //         const currentLatitude = JSON.stringify(position.coords.latitude);
    //         setCurrentLatitude(currentLatitude);
    //         setCurrentLongitude(currentLongitude);
    //     }, (error) =>
    //     {
    //         setLocationStatus(error.message);
    //     },

    //     );
    // }

    // const getLocation = async () =>
    // {
    // const { granted } = await Geolocation.requestAuthorization();

    // if (!granted) return;

    // const result = Geolocation.getCurrentPosition(info => console.log(info));
    // const resa = Geolocation.setRNConfiguration({
    //     skipPermissionRequests: true, authorizationLevel: 'auto'
    // }) // or 'whenInUse' or 'always' or 'auto' (default) or 'none' (no permission request)

    // resa.then((res) => console.log(res))
    // console.log(result);

    // }

    // Geolocation.getCurrentPosition(info => console.log(info));
    Geolocation.getCurrentPosition(
        success => alert('it was a success', success),
        error => alert('it was an error', error),
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }

    );

    // useEffect(() =>
    // {
    //     getLocation();
    // }, [])


    // async function requestLocationPermission()
    // {
    //     try
    //     {
    //         const granted = await PermissionsAndroid.check(
    //             PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    //             {
    //                 'title': 'Example App',
    //                 'message': 'Example App access to your location '
    //             }
    //         )
    //         if (granted)
    //         {
    //             console.log("You can use the location")
    //             alert("You can use the location");
    //         } else
    //         {
    //             console.log("location permission denied")
    //             alert("Location permission denied");
    //         }
    //     } catch (err)
    //     {
    //         console.warn(err)
    //     }
    // }

    // useEffect(() =>
    // {
    //     requestLocationPermission();
    // }, [])


    // useLayoutEffect(() =>
    // {
    //     navigation.setOptions({
    //         // headerShown: true,
    //         headerRight: () => (
    //             <View>
    //                 <Text style={{ color: colors.black }}>Cancel</Text>
    //             </View>
    //         ),

    //         headerLeft: () => (
    //             <View>
    //                 <Text style={{ color: colors.black }}>Back</Text>
    //             </View>
    //         ),

    //         headerTintColor: '#fff',

    //         title: 'Post',
    //         headerTitleStyle: {
    //             fontWeight: 'bold',
    //         },

    //         headerStyle: {
    //             backgroundColor: '#f4511e',
    //         },




    //     });
    // }, [ navigation ]);

    const validationSchema = Yup.object().shape({
        title: Yup.string().required().min(1).label('Title'),
        price: Yup.number().required().min(1).max(10000000).label('Price'),
        description: Yup.string().label('Description'),
        category: Yup.object().required().nullable().label('Category'),
        images: Yup.array().min(1, "At least one image is required.")
    });


    // const [ category, setCategory ] = useState(categories[ 0 ]);
    const [ resourcePath, setResourcePath ] = useState({});
    const [ imageUris, setImageUris ] = useState([]);

    const handlePress = () =>
    {
        if (!resourcePath) selectFile();
        else
            Alert.alert('Delete', 'Are you sure you want to delete this image?', [
                { text: 'Yes', onPress: () => setResourcePath({}) },
                { text: 'No' },
            ]);
    };

    const handleAdd = (image) =>
    {
        setImageUris([ ...imageUris, image ]);
    };

    const handleRemove = (image) =>
    {
        setImageUris(imageUris.filter((imageUri) => imageUri !== image));
    };



    const selectImage = () =>
    {
        try
        {
            launchImageLibrary({ mediaType: 'photo', includeBase64: true }, (response) =>
            {
                if (response.didCancel)
                {
                    console.log('User cancelled image picker');
                }
                else if (response.error)
                {
                    console.log('ImagePicker Error:', response.error);
                }
                else if (response.errorCode == 'camera_unavailable')
                {
                    console.log('Camera not available on device');
                }
                else if (response.errorCode == 'permission')
                {
                    console.log('Permission not satisfied');
                }
                else if (response.errorCode == 'others')
                {
                    console.log(response.errorMessage);
                }
                else if (response.errorMessage)
                {
                    alert('ImagePicker Error: ' + errorMessage);
                }

                else if (response.didCancel)
                {
                    alert('User cancelled image picker');
                }
                else
                {

                    setResourcePath({ uri: response.assets[ 0 ].uri });
                    console.log("Response", response.assets[ 0 ].uri);
                }
            }
            )

        }
        catch (error)
        {
            console.log('Error reading an image', error);
        }
    }


    return (
        <Screen style={styles.container}>


            <AppForm
                initialValues={{
                    // title: 'Iphone 14 Pro Max', price: '1000000', description: 'Just the latest IPhone product', category: null,
                    title: '',
                    price: '',
                    description: '',
                    category: null,
                    images: []
                }}
                onSubmit={values => navigation.navigate('Product')}
                validationSchema={validationSchema}
            >

                {/* <ImageInputList resourcePath={imageUris} onAddImage={handleAdd} onRemoveImage={handleRemove} name="images" /> */}
                <AppFormImagePicker name={"images"} />


                <AppFormField maxLength={255} name="title" placeholder="Title" placeholderTextColor={colors.medium} />
                <AppFormField maxLength={11} keyboardType="numeric" name="price" placeholder="Price" width={120} placeholderTextColor={colors.medium} />
                <AppFormPicker name="category" placeholder="Category" items={data.categories} width="50%" numberOfColumns={3} PickerItemComponent={CategoryPickerItem}
                    icon='apps'
                />
                <AppFormField maxLength={255} multiline name="description" numberOfLines={3} placeholder="Description" placeholderTextColor={colors.medium} />
                <SubmitButton title="Submit" />
            </AppForm>
        </Screen >
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: colors.white,

    },
});
