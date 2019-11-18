const {field, direction, list} = window.localStorage

const initialState = (field && direction && list)

    ? {[field + '_' + direction]: JSON.parse(list)}

    : {}


export default (state = initialState, action) => {

    switch (action.type) {

        case 'GET_INSTRUMENTS_LIST':

            let paramsName = action.field + '_' + action.direction

            window.localStorage.list = JSON.stringify(action.instruments)
            window.localStorage.field = action.field
            window.localStorage.direction = action.direction

            return {
                ...state,
                [paramsName]: {
                    ...state[paramsName],
                    ...action.instruments
                }

            }



        default: return state

    }

}