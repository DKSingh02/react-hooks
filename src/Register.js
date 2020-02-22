import React, { useState } from "react";

const initialRegForm = {
  name: "",
  email: "",
  password: ""
};

export default function Register() {
  const [registerform, setRegisterForm] = useState(initialRegForm);
  const [userData, setUserData] = useState(null);

  const chaneEventHandler = event => {
    setRegisterForm({
        ...registerform,
        [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    setUserData(registerform);
    setRegisterForm(initialRegForm);

  };


  return (
    <>
      <div
        style={{
          textAlign: "center"
        }}
      >
        <h2>Register</h2>
        <form
          style={{
            display: "grid",
            alignItems: "center",
            justifyItems: "center"
          }}
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Username"
            name="name"
            value={registerform.name}
            onChange={event => chaneEventHandler(event)}
          />
          <input
            type="email"
            placeholder="Email Id"
            name="email"
            value={registerform.email}
            onChange={event => chaneEventHandler(event)}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={registerform.password}
            onChange={event => chaneEventHandler(event)}
          />
          <button type="submit">Submit</button>
        </form>

        {userData && JSON.stringify(userData, null, 2)}
      </div>
    </>
  );
}
