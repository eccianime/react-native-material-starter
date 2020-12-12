import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';


export const getAuthors = () => dispatch => {
    dispatch({ type: 'AUTHOR_TOGGLE_LOADER', isLoading: true }) 
    firestore().collection('author').get({
        source: 'server'
    }).then( querySnapshot => {
        let data = [];
        let item;
        querySnapshot.forEach( document => {
            item = { ...document.data(), id: document.id }
            data.push( item )
        })
        dispatch({ type: 'AUTHOR_TOGGLE_LOADER', isLoading: false }) 
        dispatch({ type: 'AUTHOR_DATA_LOAD', data }) 
    })
}

export const getAuthorByPhoto = id => dispatch => {
    dispatch({ type: 'AUTHOR_TOGGLE_LOADER', isLoading: true })
    const form = {name: '', bio: '', photo: ''}
    dispatch({ type: 'AUTHOR_FORM_LOAD', ...form })
    firestore().collection('author').doc(id).get({
        source: 'server'
    }).then( querySnapshot =>{
        const form = querySnapshot.data();
        dispatch({ type: 'AUTHOR_FORM_LOAD', ...form })
        dispatch({ type: 'AUTHOR_TOGGLE_LOADER', isLoading: false })
        /*if( querySnapshot ){
            console.log( querySnapshot.docs[0]._ref )
        }
        console.log( 'querySnapshot', querySnapshot.docs )*/
    } )
}

export const createAuthor = ( data, navigation ) => dispatch => {
    const getURL = async name => await storage().ref(name).getDownloadURL();
    const targetName = data.photo.substring( data.photo.indexOf('ImagePicker/')+14 );
    dispatch({ type: 'AUTHOR_TOGGLE_LOADER', isLoading: true })
    storage().ref('author/'+targetName).putFile(data.photo).then( ({ metadata: { fullPath } }) => {
        getURL( fullPath ).then( url => {
            delete data.oldPhoto;
            firestore()
                .collection('author')
                .add({...data, photo: url })
                .then( () => {
                    dispatch({ type: 'AUTHOR_TOGGLE_LOADER', isLoading: false })
                    dispatch( getAuthors() )
                    navigation.goBack();
                }).catch( error =>{
                    dispatch({ type: 'AUTHOR_TOGGLE_LOADER', isLoading: false })
                    const modal = {
                        type: 'error', 
                        visible: true, 
                        title: error.message.substring( error.message.indexOf(']')+2 )
                    }
                    dispatch({ type: 'AUTHOR_TOGGLE_MODAL', modal })
                })
        });
    }).catch( error =>{
        dispatch({ type: 'AUTHOR_TOGGLE_LOADER', isLoading: false })
        const modal = {
            type: 'error', 
            visible: true, 
            title: error.message.substring( error.message.indexOf(']')+2 )
        }
        dispatch({ type: 'AUTHOR_TOGGLE_MODAL', modal })
    })
}

const updateAuthorFields = ( id, data, navigation, dispatch ) => {
    firestore()
        .collection('author')
        .doc(id)
        .update(data)
        .then( () => {
            dispatch({ type: 'AUTHOR_TOGGLE_LOADER', isLoading: false })
            dispatch( getAuthors() )
            navigation.goBack();
        })
        .catch( error =>{
            dispatch({ type: 'AUTHOR_TOGGLE_LOADER', isLoading: false })
            const modal = {
                type: 'error', 
                visible: true, 
                title: error.message.substring( error.message.indexOf(']')+2 )
            }
            dispatch({ type: 'AUTHOR_TOGGLE_MODAL', modal })
        })
}

export const updateAuthor  = ( id, data, navigation ) => dispatch => {
    const getURL = async name => await storage().ref(name).getDownloadURL();
    dispatch({ type: 'AUTHOR_TOGGLE_LOADER', isLoading: true })
    
    if( data.photo !== data.oldPhoto ){
        let name = data.oldPhoto.substring( data.oldPhoto.indexOf('%2F')+ 3, data.oldPhoto.indexOf('?alt')  )
        storage().ref( 'author/'+ name ).delete().then( ()=>{
            const targetName = data.photo.substring( data.photo.indexOf('ImagePicker/')+14 );
            storage().ref('author/'+targetName).putFile(data.photo).then( ({ metadata: { fullPath } }) => {
                getURL( fullPath ).then( url => {
                    delete data.oldPhoto;
                    data.photo = url;
                    updateAuthorFields(id, data,  navigation, dispatch)
                });
            }).catch( error =>{
                dispatch({ type: 'AUTHOR_TOGGLE_LOADER', isLoading: false })
                const modal = {
                    type: 'error', 
                    visible: true, 
                    title: error.message.substring( error.message.indexOf(']')+2 )
                }
                dispatch({ type: 'AUTHOR_TOGGLE_MODAL', modal })
            })
        }).catch( error =>{
            dispatch({ type: 'AUTHOR_TOGGLE_LOADER', isLoading: false })
            const modal = {
                type: 'error', 
                visible: true, 
                title: error.message.substring( error.message.indexOf(']')+2 )
            }
            dispatch({ type: 'AUTHOR_TOGGLE_MODAL', modal })
        })
    }else{
        updateAuthorFields(id, data,  navigation, dispatch)
    }   
}