export const setSorting = (field, direction) => dispatch => {

    console.log('setSorting', field, direction)

    dispatch({
        type: 'SET_SORTING',
        field,
        direction
    })

}