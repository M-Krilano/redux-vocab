export default (state = null, action) => {
  switch (action.type) {
    case "select_term":
      return action.payload;
    default:
      return state;
  }
};
