export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_USERS_LIST":
      return action.payload;
    default:
      return state;
  }
};
