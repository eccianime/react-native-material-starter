import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { AppField, AppText } from '../../components/form';
import { BookCard } from '../../components/book'

const Title = ({ navigation }) => { 
    return (
        <ScrollView style={styles.container}>
            <AppField icon='search' placeholder='Search Title' containerStyle={styles.field} />
            <View style={styles.containerBooks}>
                <BookCard image={ require('../../assets/images/portada01.jpg') }  />
                <BookCard image={ require('../../assets/images/portada01.jpg') }  />
                <BookCard image={ require('../../assets/images/portada01.jpg') }  />
                <BookCard image={ require('../../assets/images/portada01.jpg') }  />
                <BookCard image={ require('../../assets/images/portada01.jpg') }  />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        paddingTop: 20,
        paddingHorizontal: 10,
    },
    containerBooks: {
        paddingTop: 10,
        flexWrap: "wrap", 
        flexDirection: "row",
        paddingBottom: 20
    },
    field: {
        paddingHorizontal: 10
    },
    title: {
        textAlign: "center",
        fontSize: 16,
        paddingVertical: 10
    }
})

export default Title;