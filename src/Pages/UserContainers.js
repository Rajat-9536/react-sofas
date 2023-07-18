import React from "react";
import { NavbarContext } from "./Navbar";
import { useContext } from "react";

const UserContainers = () => {
  const { user, logout } = useContext(NavbarContext);

  return (
    <div>
      {user ? (
        <>
          <p>Hello, {user?.name?.toUpperCase()}</p>
          <button className="button" onClick={logout}>
            logout
          </button>
        </>
      ) : (
        <p>Please Login</p>
      )}
    </div>
  );
};

export default UserContainers;
