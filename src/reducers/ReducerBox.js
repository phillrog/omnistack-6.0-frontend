const initialState = { newBox: '' };

export default (state = initialState, action) => {
    switch (action.type) {
        case 'NEW_BOX':
            return { ...state, newBox: action.payload }
        default:
            return state
    }
}