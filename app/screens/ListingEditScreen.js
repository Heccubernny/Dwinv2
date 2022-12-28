import { useEffect, useState } from 'react';
import { Alert, PermissionsAndroid, StyleSheet } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import * as Yup from 'yup';
import { CategoryPickerItem, ImageInput, Screen } from '../components';
import { AppForm, AppFormField, AppFormPicker, SubmitButton } from '../components/forms';
import colors from '../config/colors';

export default function ListingEditScreen({ navigation })
{
    const validationSchema = Yup.object().shape({
        title: Yup.string().required().min(1).label('Title'),
        price: Yup.number().required().min(1).max(10000000).label('Price'),
        description: Yup.string().label('Description'),
        category: Yup.object().required().nullable().label('Category'),
    });

    const categories = [
        { label: 'Phone', value: 1, backgroundColor: '#ff0000', icon: 'cellphone', },
        { label: 'Computer', value: 2, backgroundColor: '#00ff00', icon: 'desktop-mac', },
        { label: 'Tablet', value: 3, backgroundColor: '#0000ff', icon: 'tablet-mac', },
        { label: 'TV', value: 4, backgroundColor: '#ffff00', icon: 'television', },
        { label: 'Speaker', value: 5, backgroundColor: '#00ffff', icon: 'speaker', },
        { label: 'Headphones', value: 6, backgroundColor: '#ff00ff', icon: 'headphones', },
        { label: 'Keyboard', value: 7, backgroundColor: '#800000', icon: 'keyboard', },
        { label: 'Mouse', value: 8, backgroundColor: '#008000', icon: 'mouse', },
        { label: 'Printer', value: 9, backgroundColor: '#000080', icon: 'printer', },
        { label: 'Scanner', value: 10, backgroundColor: '#808000', icon: 'scanner', },
        { label: 'Camera', value: 11, backgroundColor: '#008080', icon: 'camera', },
        { label: 'Game Console', value: 12, backgroundColor: '#800080', icon: 'gamepad-variant', },
        { label: 'Game Controller', value: 13, backgroundColor: '#808080', icon: 'gamepad', },
        { label: 'Game', value: 14, backgroundColor: '#c0c0c0', icon: 'gamepad-square', },
        { label: 'Laptop', value: 15, backgroundColor: '#800000', icon: 'laptop', },
        { label: 'Monitor', value: 16, backgroundColor: '#008000', icon: 'monitor', },
        { label: 'Router', value: 17, backgroundColor: '#000080', icon: 'router-wireless', },
        { label: 'Modem', value: 18, backgroundColor: '#808000', icon: 'modem', },
        { label: 'Phone', value: 19, backgroundColor: '#008080', icon: 'phone', },
        { label: 'Phone', value: 20, backgroundColor: '#800080', icon: 'phone-classic', },
    ];

    const [ category, setCategory ] = useState(categories[ 0 ]);
    const [ resourcePath, setResourcePath ] = useState({});

    const handlePress = () =>
    {
        if (!resourcePath) selectFile();
        else
            Alert.alert('Delete', 'Are you sure you want to delete this image?', [
                { text: 'Yes', onPress: () => setResourcePath({}) },
                { text: 'No' },
            ]);
    };

    const requestCameraPermission = async () =>
    {
        try
        {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.CAMERA,
                {
                    title: " Camera Permission",
                    message:
                        "App needs access to your camera " +
                        "so you can take awesome pictures.",
                    buttonNeutral: "Ask Me Later",
                    buttonNegative: "Cancel",
                    buttonPositive: "OK"
                }
            );

            if (granted === PermissionsAndroid.RESULTS.GRANTED)
            {
                alert("You can use the camera");
            }
            else
            {
                alert("Camera permission denied");
            }
        }
        catch (err)
        {
            console.warn(err);
        }
    };

    useEffect(() =>
    {

        requestCameraPermission();
    }, [])

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
            {/* <Button title='Select Image' onPress={selectImage} />
            <TouchableWithoutFeedback onLongPress={handlePress}>
                {!resourcePath.uri ? (<Image source={resourcePath.uri && { uri: resourcePath.uri }} />) : (<Image source={resourcePath.uri && { uri: resourcePath.uri }} style={{ width: 100, height: 100, borderRadius: 50, }} />)
                }

            </TouchableWithoutFeedback> */}
            <ImageInput resourcePath={resourcePath.uri} onChangeImage={(uri) => setResourcePath(uri)} />

            <AppForm
                initialValues={{ title: 'Iphone 14 Pro Max', price: '1000000', description: 'Just the latest IPhone product', category: null }}
                onSubmit={values => navigation.navigate('Product')}
                validationSchema={validationSchema}
            >
                <AppFormField maxLength={255} name="title" placeholder="Title" placeholderTextColor={colors.medium} />
                <AppFormField maxLength={11} keyboardType="numeric" name="price" placeholder="Price" width={120} placeholderTextColor={colors.medium} />
                <AppFormPicker name="category" placeholder="Category" items={categories} width="50%" numberOfColumns={3} PickerItemComponent={CategoryPickerItem}
                    icon='apps'
                // selectedItem={categories} onSelectItem={item => setCategory(category)}
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
