import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { AppField, AppText } from '../../components/form';

const Author = ({ navigation }) => { 
    return (
        <ScrollView style={styles.container}>
            <AppField icon='search' placeholder='Search Author' />
            <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "center", paddingVertical: 20 }}>
                <View style={styles.authorCard}>
                    <AppText style={ styles.name }>Author Name</AppText>
                </View>
                <View style={styles.authorCard}>
                    <AppText style={ styles.name }>Author Name</AppText>
                </View>
                <View style={styles.authorCard}>
                    <AppText style={ styles.name }>Author's Really Long Name</AppText>
                </View>
                <View style={styles.authorCard}>
                    <AppText style={ styles.name }>Author's Really Long Name</AppText>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    authorCard: {
        justifyContent: "flex-end",
        alignItems: "center",
        backgroundColor: 'skyblue',
        height: 140,
        width: 140,
        borderRadius: 10,
        margin: 10,
    },
    container: {
        backgroundColor: 'white',
        padding: 20,
    },
    name: {
        textAlign: 'center',
        marginBottom: 15,
        paddingHorizontal: 20,
        fontFamily: 'MBold'
    },
    title: {
        textAlign: "center",
        fontSize: 16,
        paddingVertical: 10
    }
})

export default Author;