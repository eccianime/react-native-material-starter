import React, { Fragment, useState } from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import * as yup from "yup";
import Icon from 'react-native-vector-icons/Ionicons';

import { Modal } from '../../../components/common';
import { AppText } from '../../../components/form';
import RegisterView from './view'

const registerController = ({ navigation }) => {
  const [ userData, changeData ] = useState({
    fullName: '',
    email: '',
    password: '',
    rpassword: ''
  })
  const [ modal, changeModal ] = useState({
    visible: false,
    title: '',
  })
  const [ isLoading, changeLoader ] = useState(false)
  const YUPValidation = yup.object().shape({
    fullName: yup.string().min( 6, 'Your Full Name should have more than 6 letters' ),
    email: yup.string().min( 6, 'Your mail should have more than 6 letters' ).email('Your email address is not formed correctly'),
    password: yup.string().test('one-and-one', 'The password field must have 1 letter and 1 number', value => !(!value.match(/\d/) || !value.match(/[a-zA-Z]/) )),
    rpassword: yup.string().test('match', "The passwords doesn't match", value => value === userData.password)
  })

  const registerUser = () => {
    YUPValidation.validate(userData, {abortEarly: false}).then( () => {
      changeLoader(true)
      auth().createUserWithEmailAndPassword( userData.email, userData.password ).then( response =>{
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
      })
    })
  }
  return (
    <>
      <Modal 
        visible={modal.visible} 
        type={modal.type} 
        onDismiss={()=>changeModal({ visible: false })} 
        title={modal.title} 
      />
      <RegisterView 
        isLoading={isLoading}
        changeLoader={changeLoader}
        navigation={navigation} 
        userData={userData} 
        changeData={changeData} 
        registerUser={registerUser}
      />
    </>
  );
};

export default registerController;