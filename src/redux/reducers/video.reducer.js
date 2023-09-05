const clips = (state = [], action) => {
    switch (action.type) {
      case 'SET_CLIPS':
        return action.payload;
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default clips;