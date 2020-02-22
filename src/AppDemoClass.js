import React, { Component } from "react";

class App extends Component {
  state = {
    count: 0,
    isOn: false
  };

  incrementCount = () => {
    this.setState(
      (prevState, props) => {
        console.log(prevState);
        console.log(props);
        return {
          count: prevState.count + 1
        };
      },
      () => {
        console.log(this.state.count);
      }
    );
  };

  toggleLight = () => {
    this.setState((prevState, props) => {
      return {
        isOn: !prevState.isOn
      };
    });
  };

  render() {
    console.log(this);

    const lightState = (
      <div
        onClick={this.toggleLight}
        style={{
          height: "50px",
          width: "50Px",
          borderRadius: "25px",
          background: this.state.isOn ? "yellow" : "grey"
        }}
      ></div>
    );

    return (
      <>
        <h3>Counter</h3>
        <button onClick={this.incrementCount}>Click{this.state.count}</button>
        <h3>Toggle Lights</h3>
        {lightState}
      </>
    );
  }
}

export default App;
