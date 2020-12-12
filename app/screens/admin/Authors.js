import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { TouchableRipple } from 'react-native-paper';
import { Header } from '../../components/common';
import { AppButton, AppText } from '../../components/form';
import Icon from 'react-native-vector-icons/Ionicons';

import colors from '../../config/colors';

const AdminAuthors = ({ navigation }) => { 
    return (
        <>
            <Header title='ADMIN - AUTHORS' navigation={navigation} showBack={true} showExit={false} />
            <ScrollView style={styles.container}>
                <AppButton 
                    containerStyle={styles.addButton} 
                    label={<AppText><Icon name='add-circle-outline' color={colors.white} size={20} /> Add Author</AppText>}
                    onPress={()=>navigation.navigate('Add Author')}
                />
                <View style={styles.tableContainer}>
                    <View style={styles.tableRow}>
                        <View style={[styles.tableContent, { backgroundColor: colors.primary}]}>
                            <AppText size='bold' style={[styles.tableData, { color: colors.white }]}>Author</AppText>
                        </View>
                        <View style={[styles.tableContent, { backgroundColor: colors.primary}]}>
                            <AppText size='bold' style={[styles.tableData, { color: colors.white, textAlign: 'center' }]}>Action</AppText>
                        </View>
                    </View>
                    <View style={styles.tableRow}>
                        <View style={styles.tableContent}>
                            <AppText style={styles.tableData}>Author</AppText>
                        </View>
                        <View style={[styles.tableContent, styles.tableContentAction]}>
                            <TouchableRipple style={[styles.circleButton, { backgroundColor: colors.primary, }]} onPress={()=>console.log('hola')}>
                                <Icon name='ios-trash-outline' color={colors.white} size={25} />
                            </TouchableRipple>
                            <TouchableRipple style={[styles.circleButton, { backgroundColor: colors.blue, }]} onPress={()=>console.log('hola')}>
                                <Icon name='ios-eye-outline' color={colors.white} size={25} />
                            </TouchableRipple>
                        </View>
                    </View>
                    <View style={styles.tableRow}>
                        <View style={styles.tableContent}>
                            <AppText style={styles.tableData}>Author</AppText>
                        </View>
                        <View style={[styles.tableContent, styles.tableContentAction]}>
                            <TouchableRipple style={[styles.circleButton, { backgroundColor: colors.primary, }]} onPress={()=>console.log('hola')}>
                                <Icon name='ios-trash-outline' color={colors.white} size={25} />
                            </TouchableRipple>
                            <TouchableRipple style={[styles.circleButton, { backgroundColor: colors.blue, }]} onPress={()=>console.log('hola')}>
                                <Icon name='ios-eye-outline' color={colors.white} size={25} />
                            </TouchableRipple>
                        </View>
                    </View>
                    <View style={styles.tableRow}>
                        <View style={styles.tableContent}>
                            <AppText style={styles.tableData}>Author</AppText>
                        </View>
                        <View style={[styles.tableContent, styles.tableContentAction]}>
                            <TouchableRipple style={[styles.circleButton, { backgroundColor: colors.primary, }]} onPress={()=>console.log('hola')}>
                                <Icon name='ios-trash-outline' color={colors.white} size={25} />
                            </TouchableRipple>
                            <TouchableRipple style={[styles.circleButton, { backgroundColor: colors.blue, }]} onPress={()=>console.log('hola')}>
                                <Icon name='ios-eye-outline' color={colors.white} size={25} />
                            </TouchableRipple>
                        </View>
                    </View>
                    <View style={styles.tableRow}>
                        <View style={styles.tableContent}>
                            <AppText style={styles.tableData}>Author</AppText>
                        </View>
                        <View style={[styles.tableContent, styles.tableContentAction]}>
                            <TouchableRipple style={[styles.circleButton, { backgroundColor: colors.primary, }]} onPress={()=>console.log('hola')}>
                                <Icon name='ios-trash-outline' color={colors.white} size={25} />
                            </TouchableRipple>
                            <TouchableRipple style={[styles.circleButton, { backgroundColor: colors.blue, }]} onPress={()=>console.log('hola')}>
                                <Icon name='ios-eye-outline' color={colors.white} size={25} />
                            </TouchableRipple>
                        </View>
                    </View>
                    <View style={styles.tableRow}>
                        <View style={styles.tableContent}>
                            <AppText style={styles.tableData}>Author</AppText>
                        </View>
                        <View style={[styles.tableContent, styles.tableContentAction]}>
                            <TouchableRipple style={[styles.circleButton, { backgroundColor: colors.primary, }]} onPress={()=>console.log('hola')}>
                                <Icon name='ios-trash-outline' color={colors.white} size={25} />
                            </TouchableRipple>
                            <TouchableRipple style={[styles.circleButton, { backgroundColor: colors.blue, }]} onPress={()=>console.log('hola')}>
                                <Icon name='ios-eye-outline' color={colors.white} size={25} />
                            </TouchableRipple>
                        </View>
                    </View>
                    <View style={styles.tableRow}>
                        <View style={styles.tableContent}>
                            <AppText style={styles.tableData}>Author</AppText>
                        </View>
                        <View style={[styles.tableContent, styles.tableContentAction]}>
                            <TouchableRipple style={[styles.circleButton, { backgroundColor: colors.primary, }]} onPress={()=>console.log('hola')}>
                                <Icon name='ios-trash-outline' color={colors.white} size={25} />
                            </TouchableRipple>
                            <TouchableRipple style={[styles.circleButton, { backgroundColor: colors.blue, }]} onPress={()=>console.log('hola')}>
                                <Icon name='ios-eye-outline' color={colors.white} size={25} />
                            </TouchableRipple>
                        </View>
                    </View>
                    <View style={styles.tableRow}>
                        <View style={styles.tableContent}>
                            <AppText style={styles.tableData}>Author</AppText>
                        </View>
                        <View style={[styles.tableContent, styles.tableContentAction]}>
                            <TouchableRipple style={[styles.circleButton, { backgroundColor: colors.primary, }]} onPress={()=>console.log('hola')}>
                                <Icon name='ios-trash-outline' color={colors.white} size={25} />
                            </TouchableRipple>
                            <TouchableRipple style={[styles.circleButton, { backgroundColor: colors.blue, }]} onPress={()=>console.log('hola')}>
                                <Icon name='ios-eye-outline' color={colors.white} size={25} />
                            </TouchableRipple>
                        </View>
                    </View>
                    <View style={styles.tableRow}>
                        <View style={styles.tableContent}>
                            <AppText style={styles.tableData}>Author</AppText>
                        </View>
                        <View style={[styles.tableContent, styles.tableContentAction]}>
                            <TouchableRipple style={[styles.circleButton, { backgroundColor: colors.primary, }]} onPress={()=>console.log('hola')}>
                                <Icon name='ios-trash-outline' color={colors.white} size={25} />
                            </TouchableRipple>
                            <TouchableRipple style={[styles.circleButton, { backgroundColor: colors.blue, }]} onPress={()=>console.log('hola')}>
                                <Icon name='ios-eye-outline' color={colors.white} size={25} />
                            </TouchableRipple>
                        </View>
                    </View>
                    <View style={styles.tableRow}>
                        <View style={styles.tableContent}>
                            <AppText style={styles.tableData}>Author</AppText>
                        </View>
                        <View style={[styles.tableContent, styles.tableContentAction]}>
                            <TouchableRipple style={[styles.circleButton, { backgroundColor: colors.primary, }]} onPress={()=>console.log('hola')}>
                                <Icon name='ios-trash-outline' color={colors.white} size={25} />
                            </TouchableRipple>
                            <TouchableRipple style={[styles.circleButton, { backgroundColor: colors.blue, }]} onPress={()=>console.log('hola')}>
                                <Icon name='ios-eye-outline' color={colors.white} size={25} />
                            </TouchableRipple>
                        </View>
                    </View>
                    <View style={styles.tableRow}>
                        <View style={styles.tableContent}>
                            <AppText style={styles.tableData}>Author</AppText>
                        </View>
                        <View style={[styles.tableContent, styles.tableContentAction]}>
                            <TouchableRipple style={[styles.circleButton, { backgroundColor: colors.primary, }]} onPress={()=>console.log('hola')}>
                                <Icon name='ios-trash-outline' color={colors.white} size={25} />
                            </TouchableRipple>
                            <TouchableRipple style={[styles.circleButton, { backgroundColor: colors.blue, }]} onPress={()=>console.log('hola')}>
                                <Icon name='ios-eye-outline' color={colors.white} size={25} />
                            </TouchableRipple>
                        </View>
                    </View>
                    <View style={styles.tableRow}>
                        <View style={styles.tableContent}>
                            <AppText style={styles.tableData}>Author</AppText>
                        </View>
                        <View style={[styles.tableContent, styles.tableContentAction]}>
                            <TouchableRipple style={[styles.circleButton, { backgroundColor: colors.primary, }]} onPress={()=>console.log('hola')}>
                                <Icon name='ios-trash-outline' color={colors.white} size={25} />
                            </TouchableRipple>
                            <TouchableRipple style={[styles.circleButton, { backgroundColor: colors.blue, }]} onPress={()=>console.log('hola')}>
                                <Icon name='ios-eye-outline' color={colors.white} size={25} />
                            </TouchableRipple>
                        </View>
                    </View>
                    
                </View>   
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    addButton: {
        backgroundColor: colors.green,
        width: 150,
        alignSelf: "flex-end"
    },
    circleButton: {
        height: 35,
        width: 35,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20
    },
    container: {
        backgroundColor: colors.white,
        flex: 1,
        padding: 10,
    },
    tableContainer: {
        borderWidth: 1,
        borderColor: colors.primary
    },
    tableRow: {
        flexDirection: "row",
    },
    tableContent: {
        justifyContent: "center",
        flex: 1, 
        borderBottomColor: colors.primary, 
        borderBottomWidth: 1
    },
    tableContentAction: {
        flexDirection: "row", 
        justifyContent: "space-evenly", 
        alignItems: "center"
    },
    tableData: {
        padding: 15,
        color: colors.darkgray
    }
})

export default AdminAuthors;