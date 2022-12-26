import React from 'react';
import { Platform, SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import { } from 'react-native-safe-area-context';

export default function Screen({ children, style })
{
    return (
        <SafeAreaView style={[ styles.screen, style ]}>
            <View style={styles.view}>{children}</View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screen: {
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        flex: 1,
    },
    view: {
        flex: 1,
    },
});
