import React from 'react';
import { View } from 'react-native';
import { BaseBackground, Loader } from '../../../components/common';
import { AppButton, AppField, AppText } from '../../../components/form';
import { styles } from '../styles';

const ForgotView = ({ 
    navigation, userData, changeData, sendMail, isLoading 
}) => (
    <BaseBackground>
        <View>
            { isLoading && <Loader /> }
            <View style={styles.whiteCard}>
            <AppText size='bold' style={styles.title}>Forgot your password?</AppText>
            <AppText style={[styles.title, { textTransform: 'none', fontSize: 14 }]}>Just input your mail and we'll send you a mail to recover your password!</AppText>
            <AppField value={userData.email} onChangeText={ text => changeData({...userData, email: text })} icon='mail-open-outline' />
            <View style={{paddingTop: 10}}>
                <AppButton label='Get New Password' onPress={sendMail} style={styles.primaryButton}  />
                <AppText onPress={ () => navigation.navigate( 'Sign In' ) } style={[styles.label, { textAlign: 'right' }]}>Go Back</AppText>
            </View>
            </View>
        </View>
    </BaseBackground>
)

export default ForgotView;