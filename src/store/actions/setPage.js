export const setPage = (field, direction, page) => dispatch => {

    console.log('setPage', field, direction, page)

    dispatch({
        type: 'SET_PAGE',
        field,
        direction,
        page
    })

}