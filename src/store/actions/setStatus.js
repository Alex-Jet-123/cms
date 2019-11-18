export const setStatus = (status) => dispatch => {

    console.log('setStatus', status)

    dispatch({
        type: 'SET_STATUS',
        status
    })

}