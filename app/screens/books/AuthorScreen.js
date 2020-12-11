import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { AuthorCard } from '../../components/author';
import { AppField, AppText } from '../../components/form';

const Author = ({ navigation }) => { 
    return (
        <ScrollView style={styles.container}>
            <AppField icon='search' placeholder='Search Author' />
            <View style={styles.containerAuthors}>
                <AuthorCard navigation={navigation} image={ require('../../assets/images/author01.jpg') } />
                <AuthorCard navigation={navigation} image={ require('../../assets/images/author02.jpg') } />
                <AuthorCard navigation={navigation} image={ require('../../assets/images/author03.jpg') } />
                <AuthorCard navigation={navigation} image={ require('../../assets/images/author04.jpg') } />
                <AuthorCard navigation={navigation} image={ require('../../assets/images/author01.jpg') } />
                <AuthorCard navigation={navigation} image={ require('../../assets/images/author02.jpg') } />
                <AuthorCard navigation={navigation} image={ require('../../assets/images/author03.jpg') } />
                <AuthorCard navigation={navigation} image={ require('../../assets/images/author04.jpg') } />
                <AuthorCard navigation={navigation} image={ require('../../assets/images/author01.jpg') } />
                <AuthorCard navigation={navigation} image={ require('../../assets/images/author02.jpg') } />
                <AuthorCard navigation={navigation} image={ require('../../assets/images/author03.jpg') } />
                <AuthorCard navigation={navigation} image={ require('../../assets/images/author04.jpg') } />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 20,
    },
    containerAuthors: {
        paddingTop: 10,
        flexWrap: "wrap", 
        flexDirection: "row",
        paddingBottom: 20
    },
    title: {
        textAlign: "center",
        fontSize: 16,
        paddingVertical: 10
    }
})

export default Author;