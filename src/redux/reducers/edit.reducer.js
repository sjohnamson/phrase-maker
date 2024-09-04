const updateClip = (state = {}, action) => {
  switch (action.type) {
    case "SET_UPDATE_CLIP":
      return action.payload;
    case "EDIT_ONCHANGE":
      return {
        ...state,
        [action.payload.property]: action.payload.value,
      };
    case "EDIT_CLEAR":
      return {
        title: "",
        description: "",
        creator: "",
        abstractconcreteobject: "",
        upperlowerboth: "",
        beats: 1,
        unison: false,
        tag: "",
      };
    default:
      return state;
  }
};

export default updateClip;
