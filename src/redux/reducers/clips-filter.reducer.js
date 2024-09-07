const clipsFilter = (state = [], action) => {
    switch (action.type) {
      case 'SET_CLIPS_FILTER':
        return action.payload;
      default:
        return state;
    }
  };
  export default clipsFilter;