import { combineReducers } from "redux";
import postReducer  from "./postReducer"
import usersReducer from "./usersReducer"

// export default combineReducers({
//   replace: () => "when no reducer decided just do it like this for a sample reducer"
// })

export default combineReducers({
  posts: postReducer,
  users: usersReducer
})

/*
General data loading with Redux:---

components gets rendered on the screen
component's "componentDidMount" method gets called
call "action creator" from within the "componentDidMount"
action creator runs to make an API request
API response with data (fullfilled/rejected)
action creator returns an "action object" with the fetched data on the payload property
some reducer see the action returns the data off the payload
now as generated some new state object; redux/react-redux makes the REACT app to be re-rendered
*/