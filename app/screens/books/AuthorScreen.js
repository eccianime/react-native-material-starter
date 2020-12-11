import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { Author } from '../../components/cards';
import { AppField, AppText } from '../../components/form';

const AuthorScreen = ({ navigation }) => { 
    return (
        <ScrollView style={styles.container}>
            <AppField icon='search' placeholder='Search Author' />
            <View style={styles.containerAuthors}>
                <Author navigation={navigation} image={ require('../../assets/images/author01.jpg') } />
                <Author navigation={navigation} image={ require('../../assets/images/author02.jpg') } />
                <Author navigation={navigation} image={ require('../../assets/images/author03.jpg') } />
                <Author navigation={navigation} image={ require('../../assets/images/author04.jpg') } />
                <Author navigation={navigation} image={ require('../../assets/images/author01.jpg') } />
                <Author navigation={navigation} image={ require('../../assets/images/author02.jpg') } />
                <Author navigation={navigation} image={ require('../../assets/images/author03.jpg') } />
                <Author navigation={navigation} image={ require('../../assets/images/author04.jpg') } />
                <Author navigation={navigation} image={ require('../../assets/images/author01.jpg') } />
                <Author navigation={navigation} image={ require('../../assets/images/author02.jpg') } />
                <Author navigation={navigation} image={ require('../../assets/images/author03.jpg') } />
                <Author navigation={navigation} image={ require('../../assets/images/author04.jpg') } />
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

export default AuthorScreen;