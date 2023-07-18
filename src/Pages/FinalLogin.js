import React, { useEffect, useState } from "react";
import { UserData } from "./UserData";

const FinalLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  //   const [errorMessage, setErrorMessage] = useState('');
  const [backendData, setbackData] = useState([]);

  //   useEffect(() => {
  //     fetch("/login")
  //       .then((response) => response.json())
  //       .then((Data) => {
  //         setbackData(Data);
  //       });
  //   }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send login request to Node.js backend
    try {
      const response = await fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      console.log(data); // Handle the response data

      if (data.success) {
        setMessage(data.message);
        console.log(data.message);
        setShowPopup(true);
        setTimeout(() =>{
          setShowPopup(false);
        })

      } else {
        setMessage(data.message);
        console.log(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  console.log(backendData);

  return (
    <div className=" form-background p-t-70 p-b-70">
      <div className="login-form">
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <div className="content">
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
        {
          <div className="popup">
          <p>{message}</p>
        </div>
        
          
        }
      </div>
    </div>
  );
};

export default FinalLogin;
