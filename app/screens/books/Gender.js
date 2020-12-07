import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { AppField, AppText } from '../../components/form';
import { BookCard } from '../../components/book'

const Gender = ({ navigation }) => { 
    return (
        <ScrollView style={styles.container}>
            
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 20,
    },
    title: {
        textAlign: "center",
        fontSize: 16,
        paddingVertical: 10
    }
})

export default Gender;