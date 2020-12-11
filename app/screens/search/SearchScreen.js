import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';

import { AppField, AppText } from '../../components/form';
import { Author, Book, Gender } from '../../components/cards'
import colors from '../../config/colors';
import { Header } from '../../components/common';

const Search = ({ navigation }) => { 
    const dataTitle = [
        { title: 'Cien Anhos de Soledad', author: 'Gabriel Garcia Marquez', year: '2000', gender: 'Horror', image: require('../../assets/images/cover02.jpg') },
        { title: 'El Jugador', author: 'Fiodor D', year: '2000', gender: 'Sci-Fi', image: require('../../assets/images/cover03.jpg') },
        { title: 'La Iliada', author: 'Homero', year: '2000', gender: 'Western', image: require('../../assets/images/cover01.jpg') }
    ]
    const dataAuthor = [ 
        {   name: 'Gabriel Garcia Marquez', image: require('../../assets/images/author02.jpg')},
        {   name: 'Homero', image: require('../../assets/images/author03.jpg')},
        {   name: 'Fiodor Dovtoievski', image: require('../../assets/images/author04.jpg')} 
    ]
    const dataGender = [ 
        {name: 'Horror', image: require('../../assets/images/genre-02.jpg')},
        {name: 'Tech', image: require('../../assets/images/genre-03.jpg')},
        {name: 'SciFi', image: require('../../assets/images/genre-04.jpg')},
    ]
    return (
        <>
            <Header title='SEARCH BOOK' navigation={navigation} showExit={true} showBack={false} />
            <ScrollView style={styles.container}>
                <View style={styles.paddedContent}>
                    <AppField icon='search' placeholder='Search Anything' containerStyle={styles.field} />
                </View>
                <AppText size='bold' style={styles.resultsTitle}>Results By Title</AppText>
                <View style={[styles.rowDirected, { paddingHorizontal: 10 }]}>
                    {
                        dataTitle.map( ({image}, index) => (
                            <Book key={`card-${index}`} navigation={navigation} image={image} />
                        ))
                    }
                </View>
                <AppText size='bold' style={styles.resultsTitle}>Results By Author</AppText>
                <View style={[styles.rowDirected, { paddingHorizontal: 20 }]}>
                    {
                        dataAuthor.map( ({image}, index) => (
                            <Author key={`card-${index}`} navigation={navigation} image={image} />
                        ))
                    }
                </View>
                <AppText size='bold' style={styles.resultsTitle}>Results By Genre</AppText>
                {
                    dataGender.map( ({image, name}, index) => (
                        <Gender key={`card-${index}`} navigation={navigation} image={image} name={name} />
                    ))
                }
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
    },
    paddedContent: {
        padding: 10
    },
    resultsTitle: {
        fontSize: 16,
        paddingVertical: 5,
        paddingHorizontal: 20,
    },
    rowDirected: {
        flexDirection: "row",
        flexWrap: "wrap",
    }
})

export default Search;