const processPhrase = (state = [], action) => {
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