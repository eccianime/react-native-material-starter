import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Surface } from "react-native-paper";
import BaseBackground from '../../components/common/BaseBackground';
import { AppText } from '../../components/form';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../../config/colors';

const BookCard = ({ image, title, gender, year, id, navigation, style }) => {
    const [ width, updateWidth ] = useState(0);
    
    const isPortrait = () => {
        const dim = Dimensions.get("screen")
        return dim.height >= dim.width
    }

    useEffect( ()=>{
        checkWidth()
        return Dimensions.addEventListener("change", () => {
            checkWidth()
        })
    }, [] )
    const checkWidth = () =>{
        let { width:newWidth } = Dimensions.get('window');
        if( width !== newWidth ){
            updateWidth( newWidth )
        }
    }
    const onPress = () =>{
        navigation.push('Book Detail', { id })
    }
    const user = undefined;
    return(
        <View style={[ styles.container, { width: isPortrait() ? width/2-10 : width/3-10 }, style]}>
            <TouchableOpacity onPress={onPress}>
                <Surface style={{ elevation: 10 }}>
                    <BaseBackground source={ image } style={styles.image}>
                    {
                        user && 
                        <TouchableOpacity style={styles.iconButton} onPress={onPress}>
                            <Icon name='heart-outline' style={styles.icon} />
                        </TouchableOpacity>
                    }
                    </BaseBackground>
                    <View style={styles.containerDescriptor}>
                        <AppText size='bold' style={styles.title}>Author</AppText>
                        <AppText style={styles.subTitle}>Gender (Year)</AppText>
                    </View>
                </Surface>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    containerDescriptor: {
        padding: 7,
    },
    iconButton: {
        position: "absolute",
        top: 5,
        right: 5,
    },
    icon: {
        color: colors.secondary,
        fontSize: 25,
    },
    image: { 
        height: 200 
    },
    subTitle: {
        textAlign: 'center',
        fontStyle: "italic"
    },
    title: {
        paddingBottom: 5, 
        textAlign: 'center',
    },
})

export default BookCard;