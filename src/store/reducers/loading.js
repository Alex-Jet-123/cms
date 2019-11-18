const initialState = {
    field: undefined,
    direction: undefined
}

export default (state = initialState, action) => {

    switch (action.type) {

        case 'SET_LOADING':

            return {
                ...state,
                field: action.field,
                direction: action.direction
            }

        default: return state

    }

}