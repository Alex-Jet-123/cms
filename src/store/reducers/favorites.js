const initialState = window.localStorage.favorites

    ? window.localStorage.favorites.split('; ')

    : null

export default (state = new Set(initialState), action) => {

    switch (action.type) {

        case 'ADD_FAVORITES':

            let newStateAdd = new Set(state)

            newStateAdd.add(String(action.id))

            window.localStorage.favorites = [...newStateAdd].join('; ')

            console.log('newStateAdd', newStateAdd)

            return newStateAdd


        case 'REMOVE_FAVORITES':

            let newStateRemove = new Set(state)

            newStateRemove.delete(String(action.id))

            window.localStorage.favorites = [...newStateRemove].join('; ')

            console.log('newStateRemove', newStateRemove)

            return newStateRemove


        default: return state

    }

}