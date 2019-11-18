const initialState = {
    instruments: undefined
}

export default (state = initialState, action) => {

    switch (action.type) {

        case 'SET_STATUS':

            return {
                ...state,
                instruments: action.status
            }

        case 'GET_INSTRUMENTS_START':

            return {
                ...state,
                instruments: 'start'
            }

        case 'GET_INSTRUMENTS_SUCCESS':

            return {
                ...state,
                instruments: 'success'
            }

        case 'GET_INSTRUMENTS_ERROR':

            return {
                ...state,
                instruments: 'error'
            }

        default: return state

    }

}