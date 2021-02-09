import _ from "lodash";
import JSONPLACEHOLDER from "../../apis/JSONPLACEHOLDER";

// Action creator must return a plain Javascript Object (for anything async use custom middleware like thunk/saga)
// but it does look here that it returns a Javascript object; no actually it isn't returning a plain JS object;
// to know that clearly; just go to babeljs and paste this code with or without async await
// so thanks to using async await even through it looks it returns a plain JS Object but as known fron Babel fron it isn't
// By the time the returned action from "action creator" gets to a reducer; now removing async await may work
// but also it becomes synchronous thus if API hasn't even been fetched so any component using that value will get error or hold up the next line code untill the API reponse is recived

// export const fetchPosts = async () => {
//   const response = await JSONPLACEHOLDER.get("/posts");
//   return {
//     type: "FETCH_POSTS",
//     payload: response
//   }
// }

export const fetchPostAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());
  _.chain(getState().posts)
    .map("userId")
    .uniq()
    .forEach((id) => dispatch(fetchUser(id)))
    .value();
};

// getState can access all the data/state from store and dispatch does the same as before (Send action to reducer)
export const fetchPosts = () => async (dispatch) => {
  const response = await JSONPLACEHOLDER.get("/posts");
  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

//  without memoize
export const fetchUser = function (id) {
  return async function (dispatch) {
    const userResponse = await JSONPLACEHOLDER.get(`/users/${id}`);
    dispatch({ type: "FETCH_USER", payload: userResponse.data });
  };
};

/* Explain: By the time the returned action from "action creator" gets to a reducer (other reason for not usign async within action creator)

action creator called within a component to dispatch to reducer however since the data is asynchrnous so it could when action create called with async data
and that action sent to reducer and therefore reducer ran to update state => however since it's asynchrnous data it could very well be the data hasn't been
recived by the time action from action creator reached to reducer and if that's so then all the component that using that state won't be able to render the
proper data

# What is middleware do?

Middleware is a function that gets called every time "action" dispatched
Has the ability to STOP, MODIFY or just mess around with actions
Tons of opens source middleware exist
Most popular use of middleware is for dealing async actions
Here, will be using a Redux-middleware called Redux-thunk to mange async actions

# Rules for Synchnous action crator: Must return an "action" object" i.e plain Javascript Object with type property while payload property could be optional

# Rules for Synchnous async action crator :
Either Return action object or functions;
when action object gets returned; it must have type property while payload property is optional

The flow of redux-thunk : #11 video within async actions with redux-thunk

now, wait untill response comes from HTTP request and then simply manually dispatch the "new async action" (manually dispatch an asyna action at future)
The "new async action" could be action object or function; no matter what as it gets dispatched => middleware will see it and if the action is a function then
it could do what middlware supposed to do as needed else the "action object" will skip the middleware and go to reducer and then update the state.

*/
