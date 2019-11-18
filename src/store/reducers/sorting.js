const initialState = {
    field: window.localStorage.field || 'works_count',
    direction: window.localStorage.direction || 'desc'
}

export default (state = initialState, action) => {

    switch (action.type) {

        case 'SET_SORTING':

            return {
                ...state,
                field: action.field,
                direction: action.direction,
            }

        default: return state

    }

}