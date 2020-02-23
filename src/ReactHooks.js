import React, { useContext } from "react";
import { UserContext } from "./index";

// Instead of using UserContext.Consumer and render props pattern
// We can use useContext hook provided by react
// useContext method will take context which we have created see example below

export default function ReactHooks() {
  const value = useContext(UserContext);
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
    </div>
  );
}
