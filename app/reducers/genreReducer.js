const genreState = {
    data: []
}

const Genre = ( state = genreState, action )=>{
    switch (action.type) {
        case '':    return { ...state }
        default:    return state
      }  
}

export default Genre;