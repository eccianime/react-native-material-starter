import React from 'react';
import { StyleSheet, View } from 'react-native';
import { AppText } from '../../components/form';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableRipple } from 'react-native-paper';
import colors from '../../config/colors';

const Header = ({ navigation }) => { 
    return (
        <View style={styles.container}>
            <AppText size='bold' style={styles.text}>Book Store App</AppText>
            <TouchableRipple style={styles.button} onPress={ ()=>navigation.navigate('Sign In') } borderless>
                <View style={{width: 34, height: 34, paddingLeft: 2, paddingTop: 3 }}>
                    <Icon name='power' style={styles.icon} />
                </View>
            </TouchableRipple>
        </View> 
    )
}

const styles = StyleSheet.create({
    button: {
        position: "absolute",
        right: 10,
        top: 2,
        borderRadius: 50
    },
    container: {
        height: 20,
        elevation: 3,
        backgroundColor: colors.secondary,
        paddingVertical: 20,
        alignItems: "center",
        justifyContent: "center"
    },
    icon: {
        textAlign: "center",
        fontSize: 24,
        color: colors.white
    },
    text: {
        fontSize: 20,
        color: colors.white
    },
})

export default Header;