import React, { Fragment, useState } from 'react';
import auth from '@react-native-firebase/auth';
import * as yup from "yup";
import Icon from 'react-native-vector-icons/Ionicons';

import { Modal } from '../../../components/common';
import { AppText } from '../../../components/form';
import SignInView from './view'

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
        changeData({})
      }).catch( error =>{
        changeLoader(false)
        changeModal({   type: 'error', visible: true, title: error.message.substring( error.message.indexOf(']')+2 ) })
      /*auth().createUserWithEmailAndPassword( userData.email, userData.password ).then( response =>{
          firestore().collection('users')
            .add({
              uid: response.user.uid,
              fullName: userData.fullName,
              email: userData.email,
              createdAt: response.user.metadata.creationTime
            }).then(() => {
              changeLoader(false)
              changeModal({   type: 'success', visible: true, title: "User added successfully" })
              setTimeout(() => {
                changeModal({   visible: false, })
                navigation.navigate('Main', { screen: 'Recents' })
              }, 3000);
            }).catch( error => {
              console.log(error)
            } );
        }).catch( error => {
          changeLoader(false)
          changeModal({   type: 'error', visible: true, title: error.message.substring( error.message.indexOf(']')+2 ) })
        })
    }).catch( error =>{
      changeModal( {
        type: 'error',
        visible: true,
        title: error.errors.map( (item, index) => <Fragment key={`error-item-${index}`}><Icon name='caret-forward' size={16} /><AppText>{item}{'\n'}</AppText></Fragment> )
      })*/
            })
        }).catch( error =>{
            changeModal( {
                type: 'error',
                visible: true,
                title: error.errors.map( (item, index) => <Fragment key={`error-item-${index}`}><Icon name='caret-forward' size={16} /><AppText>{item}{'\n'}</AppText></Fragment> )
            })
        })
    }
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