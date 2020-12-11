import React from 'react';
import { StyleSheet, View } from 'react-native';
import { AppText } from '../../components/form';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableRipple } from 'react-native-paper';
import colors from '../../config/colors';

const Header = ({ navigation, title, showExit, showBack }) => { 
    return (
        <View style={styles.container}>
            {
                showBack && 
                <TouchableRipple style={[styles.button, { left: 10 }]} onPress={ ()=>navigation.goBack() } borderless>
                    <View style={{width: 34, height: 34, paddingLeft: 2, paddingTop: 3 }}>
                        <Icon name='arrow-back' style={styles.icon} />
                    </View>
                </TouchableRipple>
            }
            <AppText size='bold' style={styles.text}>{title}</AppText>
            {
                showExit && 
                <TouchableRipple style={[styles.button, { right: 10, }]} onPress={ ()=>navigation.navigate('Sign In') } borderless>
                    <View style={{width: 34, height: 34, paddingLeft: 2, paddingTop: 3 }}>
                        <Icon name='power' style={styles.icon} />
                    </View>
                </TouchableRipple>
            }
        </View> 
    )
}

const styles = StyleSheet.create({
    button: {
        position: "absolute",
        top: 8,
        borderRadius: 50
    },
    container: {
        height: 50,
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