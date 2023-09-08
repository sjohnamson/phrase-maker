const updateClip = (state = {}, action) => {
    console.log('action.payload in reducer', action.payload)
    switch (action.type) {
        case 'SET_UPDATE_CLIP':
            return action.payload;
        case 'EDIT_ONCHANGE':
            return {
                ...state,
                [action.payload.property]: action.payload.value
            };
        case 'EDIT_CLEAR':
            return { title: '', description: '', tag: ''}
        default:
            return state;
    }
};

export default updateClip;