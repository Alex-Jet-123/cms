export const addFavorites = (id) => dispatch => {

    console.log('addFavorites', id)

    dispatch({
        type: 'ADD_FAVORITES',
        id
    })

}

export const removeFavorites = (id) => dispatch => {

    console.log('removeFavorites', id)

    dispatch({
        type: 'REMOVE_FAVORITES',
        id
    })

}

