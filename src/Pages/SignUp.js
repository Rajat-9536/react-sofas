import React, { useEffect, useState } from "react";
import { UserData } from "./UserData";
import { useApiContext } from "../context/api_context";
import { Link } from "react-router-dom";

const SignUp = () => {
  const { apiRequest } = useApiContext();
  const [formData, setformData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
  });

  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [phoneNumber, setPhoneNumber] = useState("");
  // const [password, setPassword] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setformData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await apiRequest("POST", "signup", formData);
      // const data = await response.json();
      console.log(response); // Handle the response data
      setformData({
        name: "",
        email: "",
        phoneNumber: "",
        password: "",
      });
    } catch (error) {
      console.log(error);
    }
    // old code without context
    // try {
    //   const response = await apiRequest("/signup", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ name, email, phoneNumber, password }),
    //   });

    // } catch (error) {
    //   console.log(error);
    // }
    // setName("");
    // setEmail("");
    // setPhoneNumber("");
    // setPassword("");
  };

  return (
    <div className="grid-x form-background p-t-70 p-b-70">
      <div className="cell small-12 medium-8 large-4 login-form">
        <form onSubmit={handleSubmit}>
          <h1>Sign Up</h1>
          <div className="content">
            <div className="input-field">
              <input
                name="name"
                type="name"
                placeholder="Name"
                autoComplete="nope"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-field">
              <input
                name="email"
                type="email"
                placeholder="E-mail"
                autoComplete="nope"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-field">
              <input
                name="phoneNumber"
                type="phoneNumber"
                placeholder="Phone Number"
                autoComplete="nope"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-field">
              <input
                name="password"
                type="password"
                placeholder="Password"
                autoComplete="nope"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="action">
            <button type="submit">Sign Up</button>
          </div>
          <div className="text-center m-t-b-10">
              <span className="p-t-b-10">
                Already Have Account <Link to="/login" className="">Login</Link>
              </span>
            </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
