const phrases = (state = [], action) => {
  console.log('phrases in reducer', action.payload)
    switch (action.type) {
      case 'SET_PHRASES':
        return action.payload;
      default:
        return state;
    }
  };

  export default phrases;