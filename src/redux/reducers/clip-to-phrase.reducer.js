const processPhrase = (state = [], action) => {
    console.log('state in reducer', [...state])
    console.log('action in reducer', action.payload)
    switch (action.type) {
      case 'ADD_CLIP_TO_PHRASE':
        return[
          ...state,
          action.payload
        ];
        case 'REMOVE_CLIP':
          return[
            ...state.filter(item => item.clip.id !== action.payload.clip.id)
          ];
      default:
        return state;
    }
  };

  export default processPhrase;