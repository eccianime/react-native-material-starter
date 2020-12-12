import React, { Fragment, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Image, ScrollView, StyleSheet, View } from 'react-native';
import { Surface } from 'react-native-paper';
import * as yup from "yup";
import Icon from 'react-native-vector-icons/Ionicons';
import * as ImagePicker from 'expo-image-picker'

import { Header, Loader, Modal } from '../../components/common';
import { AppButton, AppField, AppText } from '../../components/form';
import colors from '../../config/colors';
import { createAuthor, updateAuthor, getAuthorByPhoto } from '../../actions/Author';

const AddAuthor = ({ 
    navigation, route, 
    name, bio, photo, oldPhoto, changeData, isLoading,
    modal, changeModal, 
    createAuthor, updateAuthor, getAuthorByPhoto, clearForm,
}) => { 
    const YUPValidation = yup.object().shape({
        name: yup.string().required('The Name is required' ),
        bio: yup.string().required('The Bio is required'),
        photo: yup.string().required('The Author photo is required'),
    })
    const addAuthor = () => {
        let form = { name, bio, photo, oldPhoto }
        YUPValidation.validate(form, {abortEarly: false})
            .then( () => {
                if( route.params ){
                    updateAuthor( route.params.id, form, navigation );
                }else{
                    createAuthor( form, navigation );
                }
            }).catch( error =>{
                changeModal({
                    type: 'error',
                    visible: true,
                    title: error.errors.map( (item, index) => <Fragment key={`error-item-${index}`}><Icon name='caret-forward' size={16} /><AppText>{item}{'\n'}</AppText></Fragment> )
                })
            })
    }
    const openImageLibrary = async () =>{
        const result = await ImagePicker.launchImageLibraryAsync();
        if( !result.cancelled ){
            changeData( 'photo', result.uri )
        }else{
            changeData( 'photo', '' )
        }
    }
    const requestPermission = async () => {
        const result = await ImagePicker.requestCameraPermissionsAsync();
        if( !result.granted ){
            alert('You have no permission to access the camera')
        }
    }
    useEffect( ()=>{
        requestPermission()
        if( route.params ){
            getAuthorByPhoto( route.params.id )
        }else{
            clearForm()
        }
    }, [] )
    return (
        <>
            <Header title={`ADMIN - ${ route.params ? 'EDIT' : 'ADD' } AUTHOR`} navigation={navigation} showBack={true} showExit={false} />
            <Modal 
                visible={modal.visible} 
                type={modal.type} 
                onDismiss={()=>changeModal({ visible: false })} 
                title={modal.title} 
            />    
            <ScrollView style={{ backgroundColor: colors.white }}>
                { isLoading && <Loader /> }
                <View style={styles.container}>
                    <Surface style={{elevation: 5, padding: 20}}>
                        <AppField label='Name' value={name} onChangeText={ text => changeData( 'name', text )} />
                        <AppField label='Biography' value={bio} fieldStyle={{ borderRadius: 20 }} inputProps={{
                            multiline: true,
                            numberOfLines: 5
                        }} onChangeText={ text => changeData( 'bio', text )} />
                        <AppButton onPress={openImageLibrary} label='Upload Photo' labelStyle={{ color: colors.darkgray }} containerStyle={{backgroundColor: colors.opaquegray, marginTop: 20,}} />
                        {
                            photo !== '' &&
                            <Image source={{ uri: photo }} style={{ width: '100%', height: 200 }} />
                        }
                        <AppButton onPress={addAuthor} label='Submit' value={photo} containerStyle={{backgroundColor: colors.primary, marginVertical: 20, width: 150, alignSelf: 'flex-end'}} />
                    </Surface>
                </View>
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        flex: 1,
        padding: 20,
    },
})

const stateToProps = state => state.author;

const dispatchToProps = dispatch => ({
    createAuthor: ( data, navigation ) =>{
        dispatch( createAuthor( data, navigation ) )
    }, 
    updateAuthor: ( id, data, navigation ) =>{
        dispatch( updateAuthor( id, data, navigation ) )
    },
    getAuthorByPhoto: photo =>{
        dispatch( getAuthorByPhoto( photo ) )
    },
    changeData: ( target, value ) => {
        dispatch({ type: 'AUTHOR_CHANGE_FORM_DATA',  target, value })
    },
    clearForm: () => {
        const form = {name: '', bio: '', photo: ''}
        dispatch({ type: 'AUTHOR_FORM_LOAD', ...form })
    },
    changeModal: modal => {
        dispatch({ type: 'AUTHOR_TOGGLE_MODAL', modal })
    }
})

export default connect( stateToProps, dispatchToProps )( AddAuthor );