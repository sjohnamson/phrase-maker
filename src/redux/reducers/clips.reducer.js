const clips = (state = [], action) => {
    switch (action.type) {
      case 'SET_CLIPS':
        return action.payload;
      default:
        return state;
    }
  };

  export default clips;