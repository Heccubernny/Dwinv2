import { Image, Pressable, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import colors from '../config/colors'

export default function OnBoardScreen({ navigation })
{
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar translucent backgroundColor={colors.transparent} />
            <Image source={require("../assets/background.jpg")} style={styles.image} blurRadius={5} />
            <View style={styles.indicatorContainer}>
                <View style={[ styles.indicator, { backgroundColor: colors.white, opacity: 0.4 } ]} />
                <View style={[ styles.indicator, { backgroundColor: colors.black } ]} />
                <View style={[ styles.indicator, { backgroundColor: colors.white, opacity: 0.4 } ]} />
            </View>

            <View style={styles.textContainer}>
                <View>
                    <Text style={styles.title}>Sell What {'\n'} You Don't Need</Text>
                    <Text style={styles.subTitle}>At sellers we deliver the best</Text>
                </View>
            </View>

            <View style={styles.buttonContainer}>
                <Pressable onPress={() => navigation.navigate('Home')}>
                    <View style={styles.getStartedButton}>
                        <Text style={styles.getStarted}>Get Started</Text>
                    </View>
                </Pressable>

                <Pressable onPress={() => navigation.navigate('FindHouse')}>
                    <View style={styles.skipButton}>
                        <Text style={styles.skip}>Skip</Text>
                    </View>
                </Pressable>
            </View>


        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    image: {
        height: 420,
        width: '100%',
        borderBottomLeftRadius: 100,
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

    buttonContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingBottom: 40,
    },
    getStartedButton: {
        height: 50,
        marginHorizontal: 20,
        borderRadius: 15,
        backgroundColor: colors.primary,
    },
    getStarted: {
        fontSize: 16,
        fontWeight: 'bold',
        color: colors.white,
        textAlign: 'center',
        lineHeight: 50,
    },
    skip: {
        fontSize: 16,
        fontWeight: 'bold',
        color: colors.medium,

    },
    skipButton: {
        height: 50,
        marginHorizontal: 20,
        borderRadius: 15,
        backgroundColor: colors.white,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },



})
