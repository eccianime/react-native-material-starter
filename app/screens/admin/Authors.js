import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { ScrollView, StyleSheet, TouchableOpacity, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { Header, Loader } from '../../components/common';
import { AppButton, AppText } from '../../components/form';
import colors from '../../config/colors';
import { getAuthors } from '../../actions/Author'
import { TouchableRipple } from 'react-native-paper';

const AdminAuthors = ({ 
    navigation, 
    data, isLoading, getAuthors
}) => { 
    useEffect( ()=>{
        getAuthors();
    }, [] )
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
                        <View style={[styles.tableContent, { backgroundColor: colors.primary, flex: 1}]}>
                            <AppText size='bold' style={[styles.tableData, { color: colors.white, textAlign: 'center' }]}>Action</AppText>
                        </View>
                    </View>
                    {
                        isLoading ? 
                            <View style={styles.tableRow}>
                                <View style={styles.tableContent}>
                                    <AppText style={[styles.tableData, { alignSelf: 'center' }]}>
                                        <Loader />
                                    </AppText>
                                </View>
                            </View>
                        :
                            data.length > 0 ? 
                                data.map( ({ name, id, photo }, index) => {
                                    return(
                                    <TouchableRipple key={`table-row-${index}`} onPress={ ()=>navigation.navigate('Add Author', { id }) } borderless rippleColor={colors.primary}>
                                        <View style={[styles.tableRow, { backgroundColor: (index % 2) && colors.rose }]}>
                                            <View style={[styles.tableContent, { flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }]}>
                                                <Image source={{ uri: photo }} style={styles.circleImage} />
                                                <AppText style={[styles.tableData, { color: (index % 2) ? colors.black : colors.lightgray }]}>{name}</AppText>
                                            </View>
                                            <View style={[styles.tableContent, styles.tableContentAction]}>
                                                <TouchableOpacity style={styles.circleButton} onPress={()=>console.log('hola')}>
                                                    <Icon name='ios-trash-outline' color={colors.white} size={25} />
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </TouchableRipple>
                                )})
                                :
                                <View style={styles.tableRow}>
                                    <View style={styles.tableContent}>
                                        <AppText style={[styles.tableData, { alignSelf: 'center' }]}>
                                            <AppText>There is no data in here!</AppText>
                                        </AppText>
                                    </View>
                                </View>

                        
                    }
                </View>   
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    addButton: {
        backgroundColor: colors.green,
        width: 150,
        alignSelf: "flex-end",
    },
    circleButton: {
        height: 35,
        width: 35,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
        backgroundColor: colors.primary,
    },
    circleImage: {
        width: 40, 
        height: 40, 
        borderRadius: 20, 
        marginHorizontal: 10,
    },
    container: {
        backgroundColor: colors.white,
        flex: 1,
        paddingTop: 10,
        paddingHorizontal: 20,
    },
    tableContainer: {
        borderWidth: 1,
        borderColor: colors.primary,
        marginBottom: 30,
    },
    tableRow: {
        flexDirection: "row",
    },
    tableContent: {
        justifyContent: "center",
        flex: 2, 
        borderBottomColor: colors.primary, 
        borderBottomWidth: 1
    },
    tableContentAction: {
        flexDirection: "row", 
        justifyContent: "space-evenly", 
        alignItems: "center",
        flex: 1
    },
    tableData: {
        padding: 15,
        color: colors.darkgray
    }
})

const stateToProps = state => state.author;

const dispatchToProps = dispatch => ({
    getAuthors: () => {
        dispatch( getAuthors() ) 
    }
})

export default connect( stateToProps, dispatchToProps )( AdminAuthors );