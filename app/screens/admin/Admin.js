import React, { useEffect, useState } from 'react';
import { AsyncStorage, StyleSheet, View } from 'react-native';
import { Avatar, TouchableRipple } from 'react-native-paper';
import { Header } from '../../components/common';

import Icon from 'react-native-vector-icons/Ionicons';
import { AppText } from '../../components/form';
import colors from '../../config/colors';

const Search = ({ navigation }) => { 
    const [ label, changeLabel ] = useState('');
    useEffect( ()=>{
        AsyncStorage.getItem( 'userData' ).then( response => {
            changeLabel( JSON.parse(response).email.substring(0,2).toUpperCase() )
        })
    }, [] )
    const profileItems = [
        { title: 'Authors', icon: 'ios-people-outline', screen: 'Admin Authors'},
        { title: 'Books', icon: 'book-outline', screen: 'Admin Books'},
        { title: 'Genres', icon: 'ios-library-outline', screen: 'Admin Genres'},
        { title: 'Users', icon: 'person-circle-outline', screen: 'Admin Users'},
    ]
    
    const showAdminItems = data => (
        data.map( ({ title, icon, screen }, index) => (
            <TouchableRipple
                key={`admin-button-${index}`} 
                rippleColor={colors.secondary}
                onPress={ ()=>navigation.navigate(screen) }
                style={{margin: 10, borderRadius: 10}}
                borderless
                >
                <View style={styles.squares}>
                    <View style={{ flexDirection: "row", marginHorizontal: 10, alignItems: "center" }}>
                        <Icon name={icon} color={colors.primary} size={30} style={{ marginRight: 20 }} />
                        <AppText size='regular' style={styles.profileButtonTitle}>{title}</AppText>
                    </View>
                    <Icon name='caret-forward' color={colors.primary} size={30} />
                </View>
            </TouchableRipple>
        ))
    )
    return (
        <>
            <Header title='ADMIN' navigation={navigation} showBack={true} showExit={false} />
            <View style={styles.container}>
                <View>{showAdminItems( profileItems )}</View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    avatarBox: {
        alignItems: "center",
        justifyContent: "center",
        height: 150
    },
    container: {
        backgroundColor: colors.white,
        flex: 1,
    },
    profileButton: {
        borderTopColor: colors.primary,
        borderTopWidth: 1,
        paddingHorizontal: 20,
        paddingVertical: 12,
    },
    profileButtonTitle: {
        fontSize: 20,
        color: colors.darkgray,
    },
    profileButtonSubtitle: {
        fontSize: 14,
        color: colors.darkgray,
    },
    squares: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 10,
        borderWidth: 1,
        borderColor: colors.primary,
        borderRadius: 10,
    }
})

export default Search;