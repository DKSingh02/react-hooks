import React, { useState } from "react";


const AppDemoFunc = () => {
    const [count, setCount] = useState(0);
    const [isOn, setIsOn] = useState(false);

    const incrementCount = () => {
        setCount((preCount) => {
            return preCount + 1; 
        }, () => {
            console.log(count);
        });
      };
    const toggleLights = () => {
        setIsOn((prevVal) => {
            return !prevVal
        });
      }

    return (
        <>
            <h3>Counter</h3>
            <button onClick={incrementCount}>Click{count}</button>
            <h3>Toggle Lights</h3>
            <div onClick={toggleLights} style={{
                    height: "50px",
                    width: "50Px",
                    borderRadius: "25px",
                    background: isOn ? "yellow" : "grey"
                }}>
            </div>
        </>
    )
  
}

export default AppDemoFunc;