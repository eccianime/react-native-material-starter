const authorState = {
    data: [],
    isLoading: false,
    name: '',
    bio: '',
    photo: '',
    oldPhoto: '',
    modal: {
        visible: false,
        type: '',
        title: '',
    }
}

const Author = ( state = authorState, action )=>{
    switch (action.type) {
        case 'AUTHOR_TOGGLE_LOADER':
            return { ...state, isLoading: action.isLoading }
        case 'AUTHOR_DATA_LOAD':
            return { ...state, data: action.data }
        case 'AUTHOR_FORM_LOAD':
            return { ...state, 
                name: action.name,
                bio: action.bio,
                photo: action.photo,
                oldPhoto: action.photo,
            }
        case 'AUTHOR_CHANGE_FORM_DATA':
            return { ...state, 
                [action.target]: action.value
            }
        case 'AUTHOR_TOGGLE_MODAL':
            return { ...state, 
                modal: action.modal
            }
        default: 
            return {...state};
      }  
}

export default Author;