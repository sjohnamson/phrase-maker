const phrases = (state = [], action) => {
    console.log('action.payload in reducer', action.payload)
    switch (action.type) {
      case 'SET_PHRASES':
        return action.payload;
      default:
        return state;
    }
  };

  export default phrases;