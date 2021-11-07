export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_COINS":
      return action.payload;
    default:
      return state;
  }
};
