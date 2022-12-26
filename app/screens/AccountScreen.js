import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { Icon, Screen } from '../components'
import { ListItem, ListItemSeparator } from '../components/lists'
import colors from '../config/colors'

export default function AccountScreen()
{
    const item = [
        {
            title: 'My Products',
            icon: {
                name: 'format-list-bulleted',
                backgroundColor: colors.primary,
            },
        },
        {
            title: 'My Messages',
            icon: {
                name: 'email',
                backgroundColor: colors.secondary,
            },
        },
    ]

    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItem
                    title="heccubernny"
                    subTitle="ipom4eva@gmail.com"
                    image={require('../assets/profile1.png')}
                />
            </View>
            <View style={styles.container}>
                <FlatList
                    data={item}
                    keyExtractor={item => item.title}
                    ItemSeparatorComponent={ListItemSeparator}
                    renderItem={({ item }) =>
                        <ListItem
                            IconComponent={
                                <Icon
                                    name={item.icon.name}
                                    backgroundColor={item.icon.backgroundColor}
                                />
                            }
                            title={item.title}
                        />
                    }
                />

            </View>
            <ListItem
                title="Log Out"
                IconComponent={
                    <Icon name="logout" backgroundColor="#ffe66d" />
                }
            />

        </Screen>
    )
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: colors.light,
    },

    container: {
        marginVertical: 20,
    },
});
