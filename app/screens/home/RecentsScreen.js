import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';

import { AppText } from '../../components/form';
import { BookCard } from '../../components/book';
import { Header } from '../../components/home'
import colors from '../../config/colors';

const Recents = ({ navigation }) => { 
    return (
        <>
            <Header navigation={navigation} />
            <ScrollView style={styles.container}>
                <AppText size='bold' style={styles.title}>Book of the Day</AppText>
                <AppText size='bold' style={styles.title}>Last Added</AppText>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} >
                    <BookCard navigation={navigation} image={ require('../../assets/images/cover01.jpg') } title='Imma One' />
                    <BookCard navigation={navigation} image={ require('../../assets/images/cover02.jpg') } title='Imma Two' />
                    <BookCard navigation={navigation} image={ require('../../assets/images/cover03.jpg') } title='Imma Three' />
                    <BookCard navigation={navigation} image={ require('../../assets/images/cover01.jpg') } title='Imma One' />
                    <BookCard navigation={navigation} image={ require('../../assets/images/cover02.jpg') } title='Imma Two' />
                    <BookCard navigation={navigation} image={ require('../../assets/images/cover03.jpg') } title='Imma Three' />
                </ScrollView>
                <AppText size='bold' style={styles.title}>Best Reviewed</AppText>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} >
                    <BookCard navigation={navigation} image={ require('../../assets/images/cover01.jpg') } title='Imma One' />
                    <BookCard navigation={navigation} image={ require('../../assets/images/cover02.jpg') } title='Imma Two' />
                    <BookCard navigation={navigation} image={ require('../../assets/images/cover03.jpg') } title='Imma Three' />
                    <BookCard navigation={navigation} image={ require('../../assets/images/cover01.jpg') } title='Imma One' />
                    <BookCard navigation={navigation} image={ require('../../assets/images/cover02.jpg') } title='Imma Two' />
                    <BookCard navigation={navigation} image={ require('../../assets/images/cover03.jpg') } title='Imma Three' />
                </ScrollView>
                <AppText size='bold' style={styles.title}>Last Reviewed</AppText>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} >
                    <BookCard navigation={navigation} image={ require('../../assets/images/cover01.jpg') } title='Imma One' />
                    <BookCard navigation={navigation} image={ require('../../assets/images/cover02.jpg') } title='Imma Two' />
                    <BookCard navigation={navigation} image={ require('../../assets/images/cover03.jpg') } title='Imma Three' />
                    <BookCard navigation={navigation} image={ require('../../assets/images/cover01.jpg') } title='Imma One' />
                    <BookCard navigation={navigation} image={ require('../../assets/images/cover02.jpg') } title='Imma Two' />
                    <BookCard navigation={navigation} image={ require('../../assets/images/cover03.jpg') } title='Imma Three' />
                </ScrollView>
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white
    },
    title: {
        fontSize: 16,
        padding: 10
    }
})

export default Recents;