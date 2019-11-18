const initialState = window.localStorage.instruments

    ? JSON.parse(window.localStorage.instruments)

    : {}

export default (state = initialState, action) => {

    switch (action.type) {

        case 'GET_INSTRUMENTS_SUCCESS':

            let newState = {
                ...state,
                ...action.instruments
            }

            window.localStorage.instruments = JSON.stringify(newState)

            return newState

        default: return state

    }

}