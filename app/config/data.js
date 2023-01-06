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

export default {
    messages,
    listings,
    categoryList,
    categories,
    listed
}
