import React, { useEffect, useState } from "react";
import { UserData } from "./UserData";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({name, email,phoneNumber, password }),
      });

      const data = await response.json();
      console.log(data); // Handle the response data
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form-background p-t-70 p-b-70">
      <div className="login-form">
        <form onSubmit={handleSubmit}>
          <h1>Sign Up</h1>
          <div className="content">
          <div className="input-field">
              <input
                name="name"
                type="name"
                placeholder="Name"
                autoComplete="nope"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
              />
            </div>
            <div className="input-field">
              <input
                name="email"
                type="email"
                placeholder="email"
                autoComplete="nope"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>
            <div className="input-field">
              <input
                name="phoneNumber"
                type="phoneNumber"
                placeholder="phoneNumber"
                autoComplete="nope"
                value={phoneNumber}
                onChange={(event) => setPhoneNumber(event.target.value)}
                required
              />
            </div>
            <div className="input-field">
              <input
                name="password"
                type="password"
                placeholder="password"
                autoComplete="nope"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />
            </div>
          </div>
          <div className="action">
            <button type="submit">Login</button>
            <button>Register</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
