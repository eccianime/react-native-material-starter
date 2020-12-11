import React from 'react';
import PasswordSentView from './view'

const passwordSentController = ({ navigation }) => {
  setTimeout(() => {
    navigation.navigate( "Sign In" )
  }, 3000 );
  return <PasswordSentView />
};

export default passwordSentController;