const hasMore = (state = [], action) => {
      switch (action.type) {
        case 'SET_HAS_MORE':
          return action.payload;
        default:
          return state;
      }
    };
  
    export default hasMore;