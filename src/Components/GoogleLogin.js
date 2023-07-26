// src/App.js

import React, { useState } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import axios from "axios";

const CLIENT_ID =
  "236498176024-sbs5g4cd098qtahfbh8p0je70st8l3ua.apps.googleusercontent.com";

function GoogleLoginButton() {
  // const [user, setUser] = useState(null);

  // const handleLoginSuccess = async (response) => {
  //   try {
  //     const { tokenId } = response;
  //     const { data } = await axios.post('/api/login', { tokenId });
  //     setUser(data);
  //   } catch (error) {
  //     console.error('Failed to login with Google.', error);
  //   }
  // };

  // const handleLogoutSuccess = () => {
  //   setUser(null);
  // };

  const handleLoginSuccess = (response) => {
    console.log("Logged in successfully!", response);
    // You can perform additional actions here, like sending the user data to your backend.
  };

  const handleLoginFailure = (error) => {
    console.error("Failed to log in.", error);
  };

  const handleLogoutSuccess = () => {
    console.log("Logged out successfully!");
    // You can perform additional actions here, like clearing the user data from your backend.
  };

  return (
    <div>
      {/* {user ? (
        <div>
          <h1>Welcome, {user.name}!</h1>
          <img src={user.picture} alt={user.name} />
          <p>Email: {user.email}</p>
          <GoogleLogout
            clientId={CLIENT_ID}
            buttonText="Logout"
            onLogoutSuccess={handleLogoutSuccess}
          />
        </div>
      ) : (
        <GoogleLogin
          clientId={CLIENT_ID}
          buttonText="Login with Google"
          onSuccess={handleLoginSuccess}
          onFailure={handleLoginFailure}
          cookiePolicy={"single_host_origin"}
        />
      )} */}
      <GoogleLogin
        clientId={CLIENT_ID}
        buttonText="Login with Google"
        onSuccess={handleLoginSuccess}
        onFailure={handleLoginFailure}
        cookiePolicy={'single_host_origin'}
      />
      <GoogleLogout
        clientId={CLIENT_ID}
        buttonText="Logout"
        onLogoutSuccess={handleLogoutSuccess}
      />
    </div>
  );
}

export default GoogleLoginButton;
