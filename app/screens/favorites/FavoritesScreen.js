import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';

import { Book } from '../../components/cards'
import colors from '../../config/colors';
import { Header } from '../../components/common';

const FavoritesScreen = ({ navigation }) => { 
    const dataTitle = [
        { title: 'Cien Anhos de Soledad', author: 'Gabriel Garcia Marquez', year: '2000', gender: 'Horror', image: require('../../assets/images/cover02.jpg') },
        { title: 'El Jugador', author: 'Fiodor D', year: '2000', gender: 'Sci-Fi', image: require('../../assets/images/cover03.jpg') },
        { title: 'La Iliada', author: 'Homero', year: '2000', gender: 'Western', image: require('../../assets/images/cover01.jpg') },
        { title: 'Cien Anhos de Soledad', author: 'Gabriel Garcia Marquez', year: '2000', gender: 'Horror', image: require('../../assets/images/cover02.jpg') },
        { title: 'El Jugador', author: 'Fiodor D', year: '2000', gender: 'Sci-Fi', image: require('../../assets/images/cover03.jpg') },
        { title: 'La Iliada', author: 'Homero', year: '2000', gender: 'Western', image: require('../../assets/images/cover01.jpg') },
    ]
    return (
        <>
            <Header title='FAVORITE BOOKS' navigation={navigation} showExit={true} showBack={false} />
            <ScrollView style={styles.container}>
                <View style={[styles.rowDirected, { paddingHorizontal: 10 }]}>
                    {
                        dataTitle.map( ({image}, index) => (
                            <Book key={`card-${index}`} navigation={navigation} image={image} />
                        ))
                    }
                </View>
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

export default FavoritesScreen;