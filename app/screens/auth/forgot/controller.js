import React, { useState, Fragment } from 'react';
import { View } from 'react-native';
import auth from '@react-native-firebase/auth';
import * as yup from "yup";
import Icon from 'react-native-vector-icons/Ionicons';

import ForgotView from './view'
import { Modal } from '../../../components/common';
import { AppText } from '../../../components/form';

const forgotController = ({ navigation }) => {
  const [ userData, changeData ] = useState({
    email: ''
  })
  const [ modal, changeModal ] = useState({
    visible: false,
    title: '',
  })
  const [ isLoading, changeLoader ] = useState(false);
  const YUPValidation = yup.object().shape({
    email: yup.string().required("Your mail can't be empty" ).email('Your email address is not formed correctly'),
  })
  const sendMail = () => {
    YUPValidation.validate(userData, {abortEarly: false}).then( () => {
      changeLoader(true)
      auth().sendPasswordResetEmail(userData.email).then( () =>{
        changeLoader(false)
        navigation.navigate('Password Sent');
      }).catch( error => {
        changeLoader(false)
        changeModal({   type: 'error', visible: true, title: error.message.substring( error.message.indexOf(']')+2 ) })
      } )
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
        <ForgotView 
          navigation={navigation}
          sendMail={sendMail}
          userData={userData} 
          changeData={changeData}
          isLoading={isLoading}
        />
      </>
  );
};

export default forgotController;