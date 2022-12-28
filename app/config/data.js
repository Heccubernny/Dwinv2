const messages = [
    {
        id: 1,
        title: 'T1',
        description: 'D1',
        image: require('../assets/profile1.png')
    },

    {
        id: 2,
        title: 'T2',
        description: 'D2',
        image: require('../assets/profile2.png')
    },

    {
        id: 3,
        title: 'T3',
        description: 'D3',
        image: require('../assets/profile3.png')
    },

    {
        id: 4,
        title: 'T4',
        description: 'D4',
        image: require('../assets/profile4.png')
    },


]
const categoryList = [ 'Popular', 'Recommended', 'Nearest' ]


const listings = [
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

export default {
    messages,
    listings,
    categoryList
}
