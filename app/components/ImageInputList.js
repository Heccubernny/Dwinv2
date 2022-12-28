import { useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ImageInput from './ImageInput';
export default function ImageInputList({ resourcePath = [], onRemoveImage, onAddImage })
{
    const scrollView = useRef();

    return (
        <View>
            <ScrollView ref={scrollView} horizontal onContentSizeChange={() => scrollView.current.scrollToEnd()}>

                <View style={styles.container}>
                    {console.log("resourcePath", resourcePath)}
                    {resourcePath.map((image) => (
                        <View
                            key={image}
                            style={styles.image}>
                            <ImageInput
                                // key={image}
                                resourcePath={image}
                                onChangeImage={() => onRemoveImage(image)}
                            />
                        </View>
                    )
                    )}

                    <ImageInput onChangeImage={(image) => onAddImage(image)} />
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    image: {
        marginRight: 10,
    }
});
