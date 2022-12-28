import { useEffect } from 'react';
import { Alert, Image, PermissionsAndroid, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import colors from '../config/colors';
import Icon from './Icon';

export default function ImageInput({ resourcePath, onChangeImage })
{
    useEffect(() =>
    {
        requestCameraPermission();
        // if (resourcePath) onChangeImage(resourcePath);/// <--- This is the line that is causing the problem
    }, []);

    const requestCameraPermission = async () =>
    {
        try
        {
            const granted = await PermissionsAndroid.requestMultiple([
                PermissionsAndroid.PERMISSIONS.CAMERA,
                PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
                PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
            ]);
            if (granted === PermissionsAndroid.RESULTS.GRANTED)
            {
                // selectImage();
                console.log('You can use the camera');
            } else
            {
                console.log('Permission denied');
            }
        }
        catch (err)
        {
            console.warn(err);
        }
    };

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
        if (!resourcePath)
        {
            console.log("Before ResourcePath", resourcePath);

            selectImage()
            console.log("After ResourcePath", resourcePath);

        }
        else handleDelete();
    }

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

    return (
        <TouchableWithoutFeedback onPress={handlePress}>
            {/* What shows the image */}
            <View style={styles.container}>
                {!resourcePath && <Icon name={"camera"} size={90} iconColor={colors.medium} backgroundColor={colors.white} />}
                {/* What shows the image */}
                {console.log("Yeag", resourcePath)}
                {resourcePath && <Image source={{ uri: resourcePath }} style={styles.image} />}
            </View>
        </TouchableWithoutFeedback>

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
