import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { TouchableRipple, Surface } from 'react-native-paper';
import { Header } from '../../components/common';
import { AppButton, AppField, AppText } from '../../components/form';
import Icon from 'react-native-vector-icons/Ionicons';

import colors from '../../config/colors';

const AddAuthor = ({ navigation }) => { 
    return (
        <>
            <Header title='ADMIN - ADD AUTHOR' navigation={navigation} showBack={true} showExit={false} />
            <View style={styles.container}>
                <Surface style={{elevation: 5, padding: 20}}>
                    <AppField label='Name' />
                    <AppField label='Biography' fieldStyle={{ borderRadius: 20 }} inputProps={{
                        multiline: true,
                        numberOfLines: 5
                    }} />
                    <AppButton label='Submit' containerStyle={{backgroundColor: colors.primary, marginVertical: 20, width: 150, alignSelf: 'flex-end'}} />
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