export const setLoading = (field, direction) => dispatch => {

    console.log('setLoading', field, direction)

    dispatch({
        type: 'SET_LOADING',
        field,
        direction
    })

}