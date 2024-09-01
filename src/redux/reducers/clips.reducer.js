const clips = (state = [], action) => {
  console.log('clip in reducer', action.payload)
    switch (action.type) {
      case 'SET_CLIPS':
        return action.payload;
      default:
        return state;
    }
  };

  export default clips;