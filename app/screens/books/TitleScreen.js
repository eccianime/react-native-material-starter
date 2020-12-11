import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { AppField, AppText } from '../../components/form';
import { Book } from '../../components/cards'
import colors from '../../config/colors';

const Title = ({ navigation }) => { 
    return (
        <ScrollView style={styles.container}>
            <AppField icon='search' placeholder='Search Title' containerStyle={styles.field} />
            <View style={styles.containerBooks}>
                <Book navigation={navigation} image={ require('../../assets/images/cover01.jpg') }  />
                <Book navigation={navigation} image={ require('../../assets/images/cover01.jpg') }  />
                <Book navigation={navigation} image={ require('../../assets/images/cover01.jpg') }  />
                <Book navigation={navigation} image={ require('../../assets/images/cover01.jpg') }  />
                <Book navigation={navigation} image={ require('../../assets/images/cover01.jpg') }  />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
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
        paddingHorizontal: 10,
    },
    title: {
        textAlign: "center",
        fontSize: 16,
        paddingVertical: 10
    }
})

export default Title;