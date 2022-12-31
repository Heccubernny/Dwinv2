import { useLayoutEffect, useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import * as Yup from 'yup';
import { CategoryPickerItem, Screen } from '../components';
import { AppForm, AppFormField, AppFormPicker, SubmitButton } from '../components/forms';
import ImageInputList from '../components/ImageInputList';
import colors from '../config/colors';
import data from '../config/data';



export default function ListingEditScreen({ navigation })
{

    useLayoutEffect(() =>
    {
        navigation.setOptions({
            headerShown: true,
            headerRight: () => (
                <View>
                    <Text style={{ color: colors.black }}>Cancel</Text>
                </View>
            ),

            headerLeft: () => (
                <View>
                    <Text style={{ color: colors.black }}>Back</Text>
                </View>
            ),

            headerTintColor: '#fff',

            title: 'Post',
            headerTitleStyle: {
                fontWeight: 'bold',
            },

            headerStyle: {
                backgroundColor: '#f4511e',
            },




        });
    }, [ navigation ]);

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

                <ImageInputList resourcePath={imageUris} onAddImage={handleAdd} onRemoveImage={handleRemove} name="images" />


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
