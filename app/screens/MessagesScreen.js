import React, { useState } from 'react';
import { FlatList, Platform, StatusBar, StyleSheet } from 'react-native';
import { Screen } from '../components';
import { ListItem, ListItemDeleteAction, ListItemSeparator } from '../components/lists';
const initialMessages = [
    {
        id: 1,
        title: 'John Doe',
        description: 'How far',
        image: require('../assets/profile1.png')
    },

    {
        id: 2,
        title: 'John Wick',
        description: 'What is the kill rate today?',
        image: require('../assets/profile2.png')
    },

    {
        id: 3,
        title: 'Harry Potter',
        description: 'Any new trick today?',
        image: require('../assets/profile3.png')
    },

    {
        id: 4,
        title: 'Alagbo Ibadan',
        description: 'Se omo wa',
        image: require('../assets/profile4.png')
    },


]



export default function MessagesScreen({ navigation })
{
    const [ messages, setMessages ] = useState(initialMessages);
    const [ refresh, setRefresh ] = useState(false);

    const handleDelete = message =>
    {
        // Delete the message from messages
        const newMessages = messages.filter(m => m.id !== message.id);
        // SetMessages
        setMessages(newMessages);
    }


    return (
        <Screen style={styles.container}>
            <FlatList
                data={messages}
                keyExtractor={message => message.id.toString()}
                renderItem={({ item }) =>
                (
                    <ListItem
                        title={item.title}
                        subTitle={item.description}
                        image={item.image}
                        icon="chevron-right"
                        onPress={() => navigation.navigate('Account', { item })}
                        renderRightActions={() => (
                            <ListItemDeleteAction onPress={() => handleDelete(item)} />
                        )}
                    />
                )}


                ItemSeparatorComponent={ListItemSeparator}
                refreshing={refresh}
                onRefresh={() =>
                {
                    setMessages(
                        initialMessages
                    );
                }}

            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
});
