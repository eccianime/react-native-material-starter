import React, { Fragment, useState, useEffect } from 'react';
import auth from '@react-native-firebase/auth';
import * as yup from "yup";
import Icon from 'react-native-vector-icons/Ionicons';

import { Modal } from '../../../components/common';
import { AppText } from '../../../components/form';
import SignInView from './view'
import { AsyncStorage } from 'react-native';

const signInController = ({ navigation }) => {
  const [ userData, changeData ] = useState({
    email: '',
    password: ''
  })
  const [ modal, changeModal ] = useState({
    visible: false,
    title: '',
  })
  const [ isLoading, changeLoader ] = useState(false);
  const YUPValidation = yup.object().shape({
    email: yup.string().min( 5, 'Your mail is required' ).email('Your email address is not formed correctly'),
    password: yup.string().min( 5, 'Your password is required' ),
  })
  const logInUser = () => {
    YUPValidation.validate(userData, {abortEarly: false}).then( () => {
      changeLoader(true)
      auth().signInWithEmailAndPassword( userData.email, userData.password ).then( response => {
        changeLoader(false)
        navigation.navigate('Main', { screen: 'Recents' })
        AsyncStorage.setItem( 'userData', JSON.stringify(userData) )
        AsyncStorage.setItem( 'uid', response.user.uid )
      }).catch( error =>{
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
  useEffect( ()=>{
    AsyncStorage.getItem('userData').then( item =>{
      if( item !== null ){
        let data = JSON.parse( item )
        changeData(data)
      }
    })
  }, [] )
  return (<>
    <Modal 
        visible={modal.visible} 
        type={modal.type} 
        onDismiss={()=>changeModal({ visible: false })} 
        title={modal.title} 
    />
    <SignInView navigation={navigation} userData={userData} changeData={changeData} isLoading={isLoading} logInUser={logInUser} />
    </>
  );
};

export default signInController;