import React, { useEffect, useState } from "react";
import { useApiContext } from "../context/api_context";
import { usePopUpContext } from "../context/popup_context";
import PopUp from "../Components/PopUp";
import { Link } from "react-router-dom";
import GoogleLoginButton from "../Components/GoogleLogin";

const FinalLogin = () => {
  const { apiRequest } = useApiContext();
  const [formData, setformData] = useState({
    email: "",
    password: "",
  });
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const { showPopUpMessage } = usePopUpContext();
  // const [isVisible, setIsVisible] = useState(true);
  // const [showPopup, setShowPopup] = useState(false);
  //   const [errorMessage, setErrorMessage] = useState('');
  //const [backendData, setbackData] = useState([]);

  //   useEffect(() => {
  //     fetch("/login")
  //       .then((response) => response.json())
  //       .then((Data) => {
  //         setbackData(Data);
  //       });
  //   }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setformData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send login request to Node.js backend
    try {
      const response = await apiRequest("POST", "login", formData);
      console.log(response); // Handle the response data
      if (response.success) {
        setMessage(response.message);
        console.log(response.name);
        setName(response.name);
        // console.log(response.message);
        showPopUpMessage(response.message);
      } else {
        setMessage(response.message);
        setName("");
        // console.log(response.message);
        showPopUpMessage(response.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="grid-x  form-background p-t-70 p-b-70">
      <div className="cell small-12 medium-8 large-4 login-form">
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <div className="content">
            <div className="input-field">
              <input
                name="email"
                type="email"
                placeholder="email"
                autoComplete="nope"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-field">
              <input
                name="password"
                type="password"
                placeholder="password"
                autoComplete="nope"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="action">
            <button type="submit">Login</button>
          </div>
          <div className="text-center m-t-b-20">
            <GoogleLoginButton/>
          </div>
          <div className="text-center m-t-b-10">
              <span className="p-t-b-10">
                Create an Account <Link to="/signup" className="">Sign Up</Link>
              </span>
            </div>
        </form>
        {<PopUp name={name} />}
      </div>
    </div>
  );
};


export default FinalLogin;
