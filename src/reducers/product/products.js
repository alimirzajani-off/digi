export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS_LIST":
      return action.payload;
    default:
      return state;
  }
};
