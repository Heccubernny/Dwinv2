import { useEffect, useRef, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import colors from '../config/colors';

const BackgroundImage = () =>
{
    const scrollViewRef = useRef();
    const [ currentIndex, setCurrentIndex ] = useState(0);

    const backgroundImageList = [
        {
            id: 1,
            image: require('../assets/background.jpg'),
            title1: 'This is the ',
            title2: 'of the first screen',
            description: 'Welcome to the app',

        },
        {
            id: 2,
            image: require('../assets/splash.jpg'),
            title1: 'This is the ',
            title2: 'of the second screen',
            description: 'Welcome to the app',

        },
        {
            id: 3,
            image: require('../assets/chair.jpg'),
            title1: 'This is the',
            title2: 'of the third screen',
            description: 'Welcome to the app',

        }
    ]

    useEffect(() =>
    {
        const scrollToIndex = (index) =>
        {
            scrollViewRef.current.scrollTo({ x: index * 200 });
            setCurrentIndex(index);
        };
        return () =>
        {
            scrollToIndex(0);
        };
    }, []);
    const [ currentImage, setCurrentImage ] = useState(0)
    return (
        <>
            <ScrollView
                ref={scrollViewRef}
                horizontal
                onScroll={(e) =>
                {
                    const contentOffset = e.nativeEvent.contentOffset;
                    const viewSize = e.nativeEvent.layoutMeasurement;
                    const index = Math.floor(contentOffset.x / viewSize.width);
                    setCurrentImage(index);
                }}
            >
                {backgroundImageList.map((item, index) => (
                    <View key={index} style={styles.container}>
                        <Image source={item.image} style={styles.image} />
                        <View style={styles.indicatorContainer}>
                            {backgroundImageList.map((_, index) => (
                                <View
                                    key={index}
                                    style={[
                                        styles.indicator,
                                        {
                                            backgroundColor: currentImage === index ? colors.black : colors.white,
                                        },
                                    ]}
                                />
                            ))}
                        </View>
                        <View style={styles.backgroundImageOverlay} />
                        <View style={styles.textContainer}>
                            <View>
                                <Text style={styles.title}>
                                    {item.title1} {'\n'} {item.title2}
                                </Text>
                                <Text style={styles.subTitle}>{item.description}</Text>
                            </View>
                        </View>
                    </View>
                ))}


            </ScrollView>




        </>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.transparent,
        // width: '100%',
        height: 420,
    },
    textContainer: {
        paddingHorizontal: 20,
        paddingTop: 20,
    },

    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: colors.black,
    },
    subTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: colors.medium,
        opacity: 0.8,
        marginTop: 10,
        marginLeft: 20,
    },
    indicatorContainer: {
        height: 20,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    indicator: {
        height: 3,
        width: 30,
        borderRadius: 5,
        marginHorizontal: 5,
        borderWidth: 1,
    },
    image: { width: '100%', height: '100%', borderBottomLeftRadius: 50, borderBottomRightRadius: 50 }
});

export default BackgroundImage;
