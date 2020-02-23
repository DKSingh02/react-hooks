import React, { useContext, useReducer } from "react";
import { UserContext } from "./index1";

// Instead of using UserContext.Consumer and render props pattern
// We can use useContext hook provided by react
// useContext method will take context which we have created see example below

const initialState = {
  count: 0
};

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return {
        count: state.count + 1
      };
    case "decrement":
      return {
        count: state.count - 1
      };
    case "reset":
      return initialState;
    default:
      return initialState;
  }
}

export default function ReactHooks() {
  const value = useContext(UserContext);
  const [state, despatch] = useReducer(reducer, initialState);
  // return (
  // <div>
  // <UserContext.Consumer>
  {
    /* Below code is example of render props pattern */
  }
  //  {value => <div> Hello, {value}</div>}
  // </UserContext.Consumer>
  // </div>
  // );

  return (
    <div>
      <div> Hello, {value}</div>
      <div> Count, {state.count}</div>
      <button onClick={() => despatch({ type: "increment" })}>Increment</button>
      <button onClick={() => despatch({ type: "decrement" })}>Decrement</button>
      <button onClick={() => despatch({ type: "reset" })}>Reset</button>
    </div>
  );
}
