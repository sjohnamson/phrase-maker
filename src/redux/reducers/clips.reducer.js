const clips = (state = [], action) => {
    switch (action.type) {
      case 'SET_CLIPS':
        console.log('in set_clips', action)
        return action.payload;
      default:
        return state;
    }
  };

  export default clips;