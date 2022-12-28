import { useRef, useState } from 'react';
import { Dimensions, FlatList, Image, Pressable, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from '../config/colors';
import { listings } from '../config/data';
const { width } = Dimensions.get('window');
export default function FindHouseScreen()
{

    const filterIcon = useRef();
    const optionList = [
        { id: 1, name: 'For Sale', img: require('../assets/profile1.png') },
        { id: 2, name: 'For Rent', img: require('../assets/profile2.png') },
        { id: 3, name: 'For Lease', img: require('../assets/profile3.png') },
        { id: 4, name: 'For Auction', img: require('../assets/profile2.png') },
        { id: 5, name: 'For Exchange', img: require('../assets/profile1.png') },
        { id: 6, name: 'For Swap', img: require('../assets/profile4.png') }
    ]

    const categoryList = [ 'Popular', 'Recommended', 'Nearest' ]



    const listed = [
        {
            id: 1,
            title: '3 Bedroom Flat',
            img: require('../assets/profile1.png'),
            location: 'Lekki Phase 1, Lagos',
            price: 'N 5,000,000',
            interior: [
                require('../assets/profile1.png'),
                require('../assets/profile2.png'),
                require('../assets/profile3.png'),
                require('../assets/profile4.png'),
            ],
        },
        {
            id: 2,
            title: '3 Bedroom Flat',
            img: require('../assets/profile2.png'),
            location: 'Lekki Phase 1, Lagos',
            price: 'N 5,000,000',
            interior: [
                require('../assets/profile1.png'),
                require('../assets/profile2.png'),
                require('../assets/profile3.png'),
                require('../assets/profile4.png'),
            ],
        },
        {
            id: 3,
            title: '3 Bedroom Flat',
            img: require('../assets/profile1.png'),
            location: 'Lekki Phase 1, Lagos',
            price: 'N 5,000,000',
            interior: [
                require('../assets/profile1.png'),
                require('../assets/profile2.png'),
                require('../assets/profile3.png'),
                require('../assets/profile4.png'),
            ],
        },
        {
            id: 4,
            title: '3 Bedroom Flat',
            img: require('../assets/profile2.png'),
            location: 'Lekki Phase 1, Lagos',
            price: 'N 5,000,000',
            interior: [
                require('../assets/profile1.png'),
                require('../assets/profile2.png'),
                require('../assets/profile3.png'),
                require('../assets/profile4.png'),
            ],
        },
        {
            id: 5,
            title: '3 Bedroom Flat',
            img: require('../assets/profile4.png'),
            location: 'Lekki Phase 1, Lagos',
            price: 'N 5,000,000',
            interior: [
                require('../assets/profile1.png'),
                require('../assets/profile2.png'),
                require('../assets/profile3.png'),
                require('../assets/profile4.png'),
            ],
        },
        {
            id: 6,
            title: '3 Bedroom Flat',
            img: require('../assets/profile3.png'),
            location: 'Lekki Phase 1, Lagos',
            price: 'N 5,000,000',
            interior: [
                require('../assets/profile1.png'),
                require('../assets/profile2.png'),
                require('../assets/profile3.png'),
                require('../assets/profile4.png'),
            ],
        },
    ]



    const ListCategories = () =>
    {
        const [ selectedCategoryIndex, setSelectedCategoryIndex ] = useState(0);
        // const categoryList = [ 'Houses', 'Apartments', 'Land', ];
        // Popular, Featured, New, Recommended, Nearest
        return (
            // <ScrollView horizontal showsHorizontalScrollIndicator={true} style={styles.listCategoriesScrollView}>
            <View style={styles.listCategoriesContainer}>
                {categoryList.map((category, index) => (
                    <Pressable key={index} onPress={() => setSelectedCategoryIndex(index)}>

                        <View key={index} style={styles.listCategories}>
                            <Text style={[ styles.listCategoriesText, index == selectedCategoryIndex && styles.activeCategoryListText ]}>{category}</Text>
                        </View>
                    </Pressable>
                ))
                }
            </View>
            // </ScrollView>
        )
    }

    const ListOptions = () =>
    {

        return (
            <ScrollView horizontal showsHorizontalScrollIndicator={true} style={styles.listOptions}>
                <View style={styles.listOptionsContainer}>
                    {optionList.map((option, index) => (
                        <View key={index} style={styles.listOptionsCard}>
                            <Image source={option.img} style={styles.listOptionsImage} />
                            <Text style={styles.listOptionsText}>{option.name}</Text>
                        </View>
                    ))
                    }
                </View>
            </ScrollView>

        )
    }




    const Card = ({ }) =>
    {
        return (
            <View style={styles.card}>
                {listed.map((listing, index) => (
                    <View key={index} style={styles.cardContainer}>
                        <View style={styles.cardDetails}>
                            <Text style={{ color: colors.primary }}>{listing.title}</Text>
                            <Text style={styles.cardSubTitle}>{listing.location}</Text>
                            <Text style={styles.cardPrice}>{listing.price}</Text>
                        </View>
                    </View>
                ))
                }

            </View>
        )
    }

    // const Card = ({ listing }) =>
    // {
    //     return (
    //         <View style={styles.card}>
    //             <View key={listing} style={styles.cardContainer}>
    //                 <View style={styles.cardDetails}>
    //                     <Text style={{ color: colors.primary }}>{listing.title}</Text>
    //                     <Text style={styles.cardSubTitle}>{listing.location}</Text>
    //                     <Text style={styles.cardPrice}>{listing.price}</Text>
    //                 </View>
    //             </View>
    //             ))

    //         </View>
    //     )
    // }

    const Search = () =>
    {
        return (
            <View style={styles.searchContainer}>
                <View style={styles.search}>
                    <MaterialIcons name="search" color={colors.white} size={25} backgroundColor={colors.transparent} />

                    <ScrollView style={{ overflow: 'hidden' }} ref={filterIcon} horizontal onContentSizeChange={() => filterIcon.current.focus()}>
                        <TextInput style={styles.searchInput} placeholder='Search city, state, address, location ...' placeholderTextColor={colors.light} />
                    </ScrollView>
                    <Pressable onPress={() => alert("filterButton if pressed")}>
                        <MaterialIcons name="filter-list" color={colors.white} size={25} backgroundColor={colors.transparent} />
                    </Pressable>

                </View>
            </View>
        )
    }
    const Header = () =>
    {
        return (
            <View style={styles.header}>
                <View style={styles.headerLeft}>
                    <Text style={styles.text} >Location</Text>
                    <Text style={styles.subText} >Nigeria</Text>

                </View>
                <View style={styles.headerRight}>
                    <Image source={require('../assets/profile4.png')} style={styles.image} />
                </View>
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar translucent={false} backgroundColor={colors.white} barStyle='dark-content' />
            <Header />

            {/* Main container */}
            <ScrollView showsVerticalScrollIndicator={false}>
                {/* search container */}
                <Search />
                {/* Listing sales or rent */}
                <ListOptions />
                {/* Category listing container */}
                <ListCategories />
                {/* <FlatList
                    showHorizontalScrollIndicator={false}
                    contentContainerStyle={{ paddingLeft: 20, paddingVertical: 20 }}
                    horizontal
                    data={listings}
                    keyExtractor={(listing) => listing.id}
                    renderItem={({ item }) => <Card listing={item} />} /> */}
                {/* <FlatList data={listings} horizontal renderItem={({ item }) => <Card listing={item} />} /> */}
                {/* <FlatList data={listings} horizontal renderItem={() => console.log('Hello but')} /> */}
                <FlatList data={listings} keyExtractor={(listing) => listing.id.toString()} horizontal renderItem={Card} />
                <Card />
                {/* //Error dey here. */}


            </ScrollView>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    header: {
        backgroundColor: colors.white,
        flexDirection: 'row',
        paddingVertical: 20,
        paddingHorizontal: 20,
        justifyContent: 'space-between',
    },
    // headerLeft: {
    //     flex: 1,
    //     backgroundColor: colors.white,


    // },
    // headerRight: {
    //     flex: 1,
    //     backgroundColor: colors.white,
    //     alignItems: 'flex-end',
    //     marginHorizontal: 10,
    //     marginVertical: 10,

    // },
    text: {
        color: colors.medium,
        fontSize: 16,
    },
    subText: {
        color: colors.medium,
        fontSize: 20,
        fontWeight: 'bold',
    },
    image: {
        height: 50,
        width: 50,
        borderRadius: 25,
    },
    scrollView: {
        backgroundColor: colors.white,
    },
    searchContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    search: {
        backgroundColor: colors.medium,
        height: 50,
        borderRadius: 12,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        // marginVertical: 20,
    },
    searchInput: {
        color: colors.white,
        fontSize: 15,
    },

    // External components styles
    listOptionsContainer: {
        backgroundColor: colors.white,
        flexDirection: 'row',
        marginVertical: 10,
        paddingHorizontal: 10,

    },

    listOptionsCard: {
        backgroundColor: colors.white,
        height: 210,
        width: width / 2 - 30,
        elevation: 15,
        borderRadius: 10,
        marginHorizontal: 10,
        alignItems: 'center',
        paddingTop: 10,
        paddingHorizontal: 10,
    },

    listOptionsImage: {
        height: 140,
        width: "100%",
        borderRadius: 10,
    },
    listOptionsText: {
        color: colors.medium,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        lineHeight: 70,
    },

    listCategoriesContainer: {
        backgroundColor: colors.white,
        flexDirection: 'row',
        marginTop: 40,
        justifyContent: 'space-between',
        paddingHorizontal: 40,
        width: "100%",
    },

    listCategories: {
        marginHorizontal: 5,
        paddingTop: 10,
        paddingHorizontal: 10,
    },


    listCategoriesText: {
        color: colors.medium,
        opacity: 0.6,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingVertical: 5,
    },

    activeCategoryListText: {
        opacity: 1,
        color: colors.black,
        borderBottomWidth: 2,
        paddingBottom: 5,
    },

    card: {
        height: 250,
        backgroundColor: colors.white,
        elevation: 10,
        width: width - 40,
        marginRight: 20,
        padding: 15,
        borderRadius: 20,
    }
})
