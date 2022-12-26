import { useEffect } from 'react';
import { Alert, Image, PermissionsAndroid, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import colors from '../config/colors';
import Icon from './Icon';

export default function ImageInput({ resourcePath, onChangeImage })
{
    useEffect(() =>
    {
        if (resourcePath) onChangeImage(resourcePath);
        requestCameraPermission();
    }, []);


    const requestCameraPermission = async () =>
    {
        try
        {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.CAMERA,
                {
                    title: "Cool Photo App Camera Permission",
                    message:
                        "Cool Photo App needs access to your camera " +
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

    const selectImage = () =>
    {
        try
        {
            launchImageLibrary({ mediaType: 'photo', includeBase64: true, quality: 0.5, }, (response) =>
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

                    // setResourcePath({ uri: response.assets[ 0 ].uri });
                    onChangeImage(response.assets[ 0 ].uri);
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

    const handleDelete = () =>
    {
        // setResourcePath({});
        Alert.alert("Delete", "Are you sure you want to delete this image?", [
            { text: "Yes", onPress: () => onChangeImage(null) },
            { text: "No" },
        ])

    }

    const handlePress = () =>
    {
        if (!resourcePath) selectImage();
        else handleDelete();
    }

    return (
        <>
            <Image source={{ uri: resourcePath }} style={{ width: 100, height: 100 }} />

            <TouchableWithoutFeedback onPress={handlePress}>
                <View style={styles.container}>
                    {!resourcePath && <Icon name={"camera"} size={90} iconColor={colors.medium} backgroundColor={colors.white} />}


                    <TouchableOpacity onLongPress={handleDelete}>
                        {resourcePath && <Image source={{ uri: resourcePath }} style={{ width: 100, height: 100 }} />}
                        {/* <Image source={{ uri: resourcePath }} style={{ width: 100, height: 100 }} /> */}

                    </TouchableOpacity>

                </View>
            </TouchableWithoutFeedback>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        width: 100,
        height: 100,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '100%',
    }

});
