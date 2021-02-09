export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_POSTS":
      return action.payload;
    default:
      return state;
  }
};

/*
Rules of Reducers are here as follows:--

Must return any value besides "undefined"; the default value can be anything besiedes "undefined" like here it's null
explain: whenever reducer function gets called; it should alwaus return something besides "undefined" & that's why
a default value passed to it within reducer as

Previous State/data to be used within app using previous state and the action (reducers are pure)
explain: when reducer called "first time" & no action dispacthed; then it will show the default value & then
when action dispacthed it will simply update the previous state (that may be the default/any other value from previos dispatch)

Must not return/reach "out of iteself" to decide what value to return
explain: From reducer it's not supposed reach outside to get some data (like API or anything); it will always just take its
given parameters and return the value by using that parameters

Must not mutate its input "state" argument/paramter
explain: both argument must not be assinged ( = ) any new value or but it can modified via methods
*/
