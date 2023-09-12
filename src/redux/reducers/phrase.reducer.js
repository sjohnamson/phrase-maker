const phrases = (state = [], action) => {
    switch (action.type) {
      case 'SET_PHRASES':
        return action.payload;
      default:
        return state;
    }
  };

  export default phrases;