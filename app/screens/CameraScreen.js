import React from 'react';
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
export default function CameraScreen()
{
    const [ resourcePath, setResourcePath ] = React.useState({});

    const handlePress = () =>
    {
        if (!resourcePath) selectFile();
        else
            Alert.alert('Delete', 'Are you sure you want to delete this image?', [
                { text: 'Yes', onPress: () => setResourcePath({}) },
                { text: 'No' },
            ]);
    };


    const cameraLaunch = () =>
    {
        let options = {
            title: 'Take a picture',
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
            mediaType: 'camera',
            includeBase64: true,
            quality: 1,
            saveToPhotos: true,
            cameraType: 'back',

        };

        launchCamera(options, (response) =>
        {
            console.log('Response = ', response);

            if (response.didCancel)
            {
                console.log('User cancelled camera');
            }
            else if (response.errorCode)
            {
                console.log('Camera error: ', response.errorCode);
            }
            else if (response.customButton)
            {
                console.log('User tapped custom button: ', response.customButton);
                alert(response.customButton);
            }
            else
            {
                let source = { uri: response.uri };
                console.log("Source", source)
                setResourcePath(source);
            }
        });
    };

    let index = 0;

    const selectFile = () =>
    {
        try
        {
            var options = {
                title: 'Select Image',
                customButtons: [
                    { name: 'customOptionKey', title: 'Choose Photo from Custom Option' },
                ],
                storageOptions: {
                    skipBackup: true,
                    path: 'images',
                },
                mediaType: 'mixed',
                selectionLimit: 0,

            };
            launchImageLibrary(options, (response) =>
            {
                console.log('Response = ', response);

                if (response.didCancel)
                {
                    console.log('User cancelled image picker');
                }
                else if (response.error)
                {
                    console.log('ImagePicker Error: ', response.error);
                }
                else if (response.customButton)
                {
                    console.log('User tapped custom button: ', response.customButton);
                    alert(response.customButton);
                }
                else
                {
                    const source = response;
                    console.log(source);
                    setResourcePath(source);
                }
            });

        } catch (error)
        {
            console.warn("Camera just produce this error", error)
        }

    };

    const deleteImage = () =>
    {
        Alert.alert(
            title = "Are you sure you want to delete this image?",
            message = "This action cannot be undone",
            buttons = [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "OKay", onPress: () => setResourcePath({}) },

            ],

            options = { cancelable: true }
        );
    };



    return (
        <View style={styles.container}>

            <View style={styles.container}>

                <Image

                    source={{

                        uri: 'data:image/jpeg;base64,' + resourcePath.data,

                    }}

                />

                {/* <Image

                    // source={{ uri: resourcePath.assets[ 0 ].uri }}
                    source={resourcePath.assets ? { uri: resourcePath.assets[ 0 ].uri } : { uri: resourcePath.uri }}
                    // show the selectedImage in the image tag



                    style={{ width: 200, height: 200 }}

                /> */}
                <TouchableOpacity onLongPress={deleteImage}>
                    <Image
                        key={index++}
                        style={{ width: 300, height: 300, borderRadius: 20 }}
                        source={resourcePath.assets ? { uri: resourcePath.assets[ 0 ].uri } : { uri: resourcePath.uri }}
                    />
                </TouchableOpacity>
                <Text style={{ alignItems: 'center' }}>

                    {resourcePath.uri}

                </Text>


                <TouchableOpacity onPress={selectFile} style={styles.button}>

                    <Text style={styles.buttonText}>Select File</Text>

                </TouchableOpacity>

                <TouchableOpacity onPress={cameraLaunch} style={styles.button}>
                    <Text style={styles.buttonText}>Camera</Text>
                </TouchableOpacity>
            </View>

        </View>

    );

}

const styles = StyleSheet.create({
    container: {

        flex: 1,

        padding: 30,

        alignItems: 'center',

        justifyContent: 'center',

        backgroundColor: '#fff'

    },

    button: {

        width: 250,

        height: 60,

        backgroundColor: '#3740ff',

        alignItems: 'center',

        justifyContent: 'center',

        borderRadius: 4,

        marginBottom: 12

    },

    buttonText: {

        textAlign: 'center',

        fontSize: 15,

        color: '#fff'

    }
});
