export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_USER":
      // make an array and put eveything from state and action.payload within an array
      return [...state, action.payload];
    default:
      return state;
  }
}