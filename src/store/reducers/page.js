export default (state = {}, action) => {

    switch (action.type) {

        case 'SET_PAGE':

            return {
                ...state,
                [action.field + '_' + action.direction]: action.page
            }

        default: return state

    }

}