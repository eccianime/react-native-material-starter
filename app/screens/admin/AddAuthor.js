import React, { Fragment, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Surface } from 'react-native-paper';
import * as yup from "yup";
import firestore from '@react-native-firebase/firestore';
import Icon from 'react-native-vector-icons/Ionicons';
import ImagePicker from 'react-native-image-picker'

import { Header, Loader, Modal } from '../../components/common';
import { AppButton, AppField, AppText } from '../../components/form';
import colors from '../../config/colors';

const AddAuthor = ({ navigation }) => { 
    const [ authorData, changeData ] = useState({
        name: '',
        bio: ''
    })
    const [ modal, changeModal ] = useState({
        visible: false,
        title: '',
      })
    const YUPValidation = yup.object().shape({
        name: yup.string().required('The name is required' ),
        bio: yup.string().required('The Bio is required'),
    })
    const [ isLoading, changeLoader ] = useState(false);
    const addAuthor = () => {
        YUPValidation.validate(authorData, {abortEarly: false})
        .then( () => {
          changeLoader(true)
          firestore()
            .collection('author')
            .add(authorData)
            .then( response => {
                console.log( 'response', response )
                changeLoader(false)
                navigation.goBack()
            }).catch( error =>{
                console.log( 'error', error )
                changeLoader(false)
                changeModal({   type: 'error', visible: true, title: error.message.substring( error.message.indexOf(']')+2 ) })
            })
        }).catch( error =>{
            changeModal( {
                type: 'error',
                visible: true,
                title: error.errors.map( (item, index) => <Fragment key={`error-item-${index}`}><Icon name='caret-forward' size={16} /><AppText>{item}{'\n'}</AppText></Fragment> )
            })
        })
    }
    const openImageLibrary = () =>{
        console.log('hola')
        ImagePicker.launchCamera()
        ImagePicker.launchImageLibrary({
          title: "Select Author Photo",
          storageOptions: {
              skipBackup: true,
              path: true
          }
        }, response => {
            console.log(response)
        })
    }
    return (
        <>
            <Header title='ADMIN - ADD AUTHOR' navigation={navigation} showBack={true} showExit={false} />
            <Modal 
                visible={modal.visible} 
                type={modal.type} 
                onDismiss={()=>changeModal({ visible: false })} 
                title={modal.title} 
            />    
            { isLoading && <Loader /> }
            <View style={styles.container}>
                <Surface style={{elevation: 5, padding: 20}}>
                    <AppField label='Name'  onChangeText={ text => changeData({...authorData, name: text })} />
                    <AppField label='Biography' fieldStyle={{ borderRadius: 20 }} inputProps={{
                        multiline: true,
                        numberOfLines: 5
                    }} onChangeText={ text => changeData({...authorData, bio: text })} />
                    <AppButton onPress={openImageLibrary} label='Upload Photo' labelStyle={{ color: colors.darkgray }} containerStyle={{backgroundColor: colors.opaquegray, marginTop: 20,}} />
                    <AppButton onPress={addAuthor} label='Submit' containerStyle={{backgroundColor: colors.primary, marginVertical: 20, width: 150, alignSelf: 'flex-end'}} />
                </Surface>
            </View>
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

export default AddAuthor;