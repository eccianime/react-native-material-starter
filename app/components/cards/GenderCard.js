import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { TouchableRipple } from "react-native-paper";
import BaseBackground from '../../components/common/BaseBackground';
import { AppText } from '../../components/form';
import colors from '../../config/colors';

const GenderCard = ({ image, name, id, navigation, style }) => {
    const onPress = () =>{
        console.log('Hola')
        //navigation.push('Author Detail', { id })
    }
    return(
        <TouchableRipple borderless onPress={onPress} style={{marginBottom: 20}}>
            <BaseBackground style={{ height: 100 }} source={ image } >
                <AppText size='bold' style={styles.genre}>{name}</AppText>
            </BaseBackground>
        </TouchableRipple>
    )
};

const styles = StyleSheet.create({
    imageContainer: {
        padding: 10,
        justifyContent: "flex-end",
    },
    image: {
        borderRadius: 10,
    },
    title: {
        elevation: 5,
        color: colors.white,
        textAlign: 'center',
    },
    titleContainer: {
        backgroundColor: 'rgba(0,0,0,.5)',
        borderRadius: 10,
        paddingHorizontal: 10,
        justifyContent: "center",
        height: 38
    },
    genre: {
        color: 'white',
        fontSize: 30,
    }
})

export default GenderCard;


/*{/*<View style={[ styles.container, { width: width/2-20 }, style]}>
            <TouchableOpacity onPress={onPress}>
                <Surface style={{ elevation: 10, borderRadius: 10, }}>
                    <BaseBackground source={ image } style={styles.imageContainer} imageStyle={styles.image}>
                        <View style={styles.titleContainer}>
                            <AppText size='bold' style={styles.title}>Homero</AppText>
                        </View>
                    </BaseBackground>
                </Surface>
            </TouchableOpacity>
    </View>*/