import React, { useState, useEffect } from "react";

const initialLocationState = {
    latitude: null,
    longitude: null,
    speed: null
  };

const AppDemoFunc = () => {
  const [count, setCount] = useState(0);
  const [isOn, setIsOn] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });
  const [status, setStatus] = useState(navigator.onLine);
  const [{ latitude, longitude, speed }, setLocation] = useState(
    initialLocationState
  );
  let mounted = true;

  useEffect(() => {
    document.title = `Title updated ${count} times`;

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    navigator.geolocation.getCurrentPosition(handleGeolocation);
    const watchId = navigator.geolocation.watchPosition(handleGeolocation);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
      navigator.geolocation.clearWatch(watchId);
      mounted = false;
    };
  }, [count]);

  const handleMouseMove = event => {
    setMousePosition({
      x: event.pageX,
      y: event.pageY
    });
  };

  const handleOnline = () => {
    setStatus(true);
  };

  const handleOffline = () => {
    setStatus(false);
  };

  const handleGeolocation = event => {
    if (mounted) {
      setLocation({
        latitude: event.coords.latitude,
        longitude: event.coords.longitude,
        speed: event.coords.speed
      });
    }
  };

  const incrementCount = () => {
    setCount(
      preCount => {
        return preCount + 1;
      },
      () => {
        console.log(count);
      }
    );
  };
  const toggleLights = () => {
    setIsOn(prevVal => {
      return !prevVal;
    });
  };

  return (
    <>
      <h3>Counter</h3>
      <button onClick={incrementCount}>Click{count}</button>
      <h3>Toggle Lights</h3>
      <div
        onClick={toggleLights}
        style={{
          height: "50px",
          width: "50Px",
          borderRadius: "25px",
          background: isOn ? "yellow" : "grey"
        }}
      ></div>
      <h3>Mouse positions</h3>
      {JSON.stringify(mousePosition, null, 2)}
      
      <h3>Network Status</h3>
      <p>
        You are <strong>{status ? "online" : "offline"}</strong>
      </p>

      <h3>Geolocation</h3>
      <p>Latitude is {latitude}</p>
      <p>Longitude is {longitude}</p>
      <p>Your speed is {speed ? speed : "0"}</p>

    </>
  );
};

export default AppDemoFunc;
