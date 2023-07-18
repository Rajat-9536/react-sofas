import React, { useEffect, useState } from "react";
import { UserData } from "./UserData";

const Login = () => {
  // const [backData, setBackData] = useState([]);
  const [name, setName] = useState("");

  const [users, setusers] = useState(UserData);

  // console.log(users);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return;
    const fakeId = Date.now();
    const newPerson = { Id: fakeId, name: name };
    setusers([...users, newPerson]);

    console.log(users);
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };

  // useEffect(() => {
  //   fetch("/user")
  //     .then((response) => response.json())
  //     .then((Data) => {
  //       setBackData(Data);
  //     });
  // }, []);
  // console.log(backData);

  return (
    <div className="form-background p-t-70 p-b-70">
      <div className="login-form">
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <div className="content">
            <div className="input-field">
              <input
                Name="Name"
                type="text"
                placeholder="Name"
                autoComplete="nope"
                value={name}
                onChange={handleChange}
              />
            </div>
            {/* <div className="input-field">
              <input
                type="password"
                placeholder="Password"
                autoComplete="new-password"
                value={password}
                onChange={handleChange}
              />
            </div> */}
            {/* <a href="#" className="link">
              Forgot Your Password?
            </a> */}
          </div>
          <div className="action">
            <button type="submit">Register</button>
            {/* <button>Sign in</button> */}
          </div>
        </form>

        <div className="login-form">
          {users.map((user) => {
            return <div key={user.Id}>{user.name}</div>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Login;
