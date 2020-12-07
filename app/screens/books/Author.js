import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { AppField } from '../../components/form';
import { BookCard } from '../../components/book';

const Author = ({ navigation }) => { 
    return (
        <ScrollView style={styles.container}>
            <AppField icon='search' placeholder='Search Author' />
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

export default Author;