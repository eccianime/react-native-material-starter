import React, { useEffect, useState } from 'react';
import { AsyncStorage, StyleSheet, View } from 'react-native';
import { Header } from '../../components/common';

import colors from '../../config/colors';

const AdminGenres = ({ navigation }) => { 
    return (
        <>
            <Header title='ADMIN - GENRES' navigation={navigation} showBack={true} showExit={false} />
            <View style={styles.container}>
                
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        flex: 1,
    },
})

export default AdminGenres;