const currentClip = (state = [], action) => {
    switch (action.type) {
      case 'SET_CURRENT':
        return action.payload;
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default currentClip;