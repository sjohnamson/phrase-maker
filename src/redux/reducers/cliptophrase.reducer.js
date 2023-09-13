const processPhrase = (state = [], action) => {
    // console.log('action.payload in reducer', action.payload)
    switch (action.type) {
      case 'ADD_CLIP_TO_PHRASE':
        return[
          ...state,
          action.payload
        ];
      default:
        return state;
    }
  };

  export default processPhrase;