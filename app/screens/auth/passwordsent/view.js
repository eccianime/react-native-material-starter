import React from 'react';
import { View } from 'react-native';
import { BaseBackground } from '../../../components/common';
import { AppText } from '../../../components/form';
import { styles } from '../styles';

const PasswordSentView = () => (
    <BaseBackground>
        <View style={styles.whiteCard}>
            <AppText size='bold' style={styles.title}>A link to reset your password has been sent!</AppText>
        </View>
    </BaseBackground>
)

export default PasswordSentView;