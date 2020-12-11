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
        { title: 'Profile', subtitle: 'Edit your password and your profile picture'},
        { title: 'My Reviews', subtitle: 'See your book reviews'},
        { title: 'About', subtitle: 'Information about the app and the creator'},
        { title: 'Exit', subtitle: 'Close the app'},
    ]
    
    const showProfileItems = data => (
        data.map( (item, index) => (
            <TouchableRipple
                key={`item-profile-${index}`} 
                rippleColor={colors.secondary}
                onPress={ ()=>console.log('hola')} 
                style={[styles.profileButton, index === data.length -1 && { borderBottomColor: colors.primary, borderBottomWidth: 1, }]}>
                <View style={styles.rowDirection}>
                    <View>
                        <AppText size='regular' style={styles.profileButtonTitle}>{item.title}</AppText>
                        <AppText style={styles.profileButtonSubtitle}>{item.subtitle}</AppText>
                    </View>
                    <View>
                        <Icon name='caret-forward' color={colors.primary} size={30} />
                    </View>
                </View>
            </TouchableRipple>
        ))
    )
    return (
        <>
            <Header title='PROFILE' navigation={navigation} showBack={false} showExit={true} />
            <View style={styles.container}>
                <View style={ styles.avatarBox }>
                    <Avatar.Text size={100} label={ label } style={ styles.avatarContainer } labelStyle={styles.avatarText} />
                </View>
                <View>
                    {showProfileItems( profileItems )}
                </View>
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
    avatarContainer: {
        backgroundColor: colors.secondary,
    },
    avatarText: {
        fontFamily: 'NewJuneBook'
    },
    container: {
        backgroundColor: colors.white,
        flex: 1,
    },
    profileButton: {
        borderTopColor: colors.primary,
        borderTopWidth: 1,
        padding: 15,
    },
    profileButtonTitle: {
        fontSize: 16,
        color: colors.darkgray,
        marginBottom: 5
    },
    profileButtonSubtitle: {
        fontSize: 14,
        color: colors.darkgray,
    },
    rowDirection: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    }
})

export default Search;