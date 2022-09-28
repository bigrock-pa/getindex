const SET_AUTH = "SET_AUTH"

const defaultState = {
    items: [],
    isFetching: true,
    auth: ''
}

export default function reposAuthreducer(state = defaultState, action) {
    switch (action.type) {
        case SET_AUTH:
            return {
                ...state,
                auth: action.payload
            }
        default:
            return state
    }
}

export const setAuthreducer = (auth) => ({ type: SET_AUTH, payload: auth })