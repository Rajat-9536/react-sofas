import React, { useEffect, useState } from "react";
import { UserData } from "./UserData";

const Login = () => {

  const [record,setRecord] = useState({
    Email:'',
    Password:'',
  });
  const [users,setUsers] = useState(UserData);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(record);

    if(!record) return;
    const fakeId = Date.now();
    const newUser = {fakeId,...record};
    const updateUsers = [...users,newUser];
    setUsers(updateUsers);
    setRecord({Email: "", Password: "" });

    console.log(updateUsers);
    
  };

  const handleChange = (e) => {

    setRecord({...record,[e.target.name]:e.target.value});
  };


  const removeUser = (Id) =>{
    const updatedUser = users.filter((person) => person.Id !== Id);
    setUsers(updatedUser);
  }


  return (
    <div className="form-background p-t-70 p-b-70">
      <div className="login-form">
        <form  onSubmit={handleSubmit}>
          <h1>Login</h1>
          <div className="content">
            <div className="input-field">
              <input
              name="Email"
                type="email"
                placeholder="Email"
                autoComplete="nope"
                value={record.Email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-field">
              <input
              name="Password"
                type="Password"
                placeholder="Password"
                autoComplete="nope"
                value={record.Password}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="action">
            <button type="submit">
              Login
            </button>
            <button>Register</button>
          </div>
        </form>

        <div className="login-form">
          {
            users.map((user) =>{
              return <div key={user.Id} style={{textAlign:"center"}}>
                <h4>{user.Email}</h4>
                <button className="button tiny b-radius-5x" style={{borderRadius:"5px"}} onClick={()=> removeUser(user.Id)}>Remove</button>
              </div>
            })
          }
        </div>
      </div>
    </div>
  );
};

export default Login;
