import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  HiMapPin,
  FaAccusoft,
  MdMarkEmailRead,
  FaEarthAsia,
  FaAnchor,
} from "react-icons/fa";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [clientmessage, setclientMessage] = useState("");
  const [message, setMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send login request to Node.js backend
    try {
      const response = await fetch("/clientmessage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, clientmessage }),
      });

      const data = await response.json();
      console.log(data); // Handle the response data

      setName('');
      setEmail('');
      setclientMessage('');

      if (data.success) {
        setMessage(data.message);
        console.log(data.message);
        setShowPopup(true);
        setTimeout(() => {
          setShowPopup(false);
        },3000);
      } else {
        setMessage(data.message);
        console.log(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Wrapper>
      <div className="grid-container">
        <div className="cell large-12 m-t-b-80 boxshadow">
          <div className="grid-x grid-margin-x grid-padding-x grid-padding-y">
            <div className="cell small-12 medium-12 large-6 login-backgorund text-center medium-text-left">
              <div className="grid-x">
                <div className="cell small-12 large-11 large-offset-1 m-t-b-50 ">
                  <form onSubmit={handleSubmit}>
                    <h1 style={{ color: "#fff", fontSize: "40px" }}>
                      Send Us a Message
                    </h1>
                    <div className="content">
                      <div className="m-t-20">
                        <InputField
                          name="name"
                          type="text"
                          placeholder="Name"
                          autoComplete="nope"
                          value={name}
                          onChange={(event) => setName(event.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className="content">
                      <div className="m-t-20">
                        <InputField
                          name="email"
                          type="email"
                          placeholder="Email"
                          autoComplete="nope"
                          value={email}
                          onChange={(event) => setEmail(event.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className="content">
                      <div className="m-t-40">
                        <TextareaField
                          name="clientmessage"
                          type="text"
                          placeholder="Type your Message..."
                          autoComplete="nope"
                          rows={6}
                          cols={50}
                          value={clientmessage}
                          onChange={(event) =>
                            setclientMessage(event.target.value)
                          }
                          required
                        />
                      </div>
                    </div>
                    <div className="action">
                      <button
                        type="submit"
                        className="btn m-t-20 "
                        style={{
                          background: "black",
                          fontWeight: "600",
                          color: "white",
                        }}
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                  {
                    <div className="popup">
                      <p>{message}</p>
                    </div>
                  }
                </div>
              </div>
            </div>
            <div className="cell small-12 medium-12 large-6 align-self-middle">
              <div className="title">
                <h3>Contact Us</h3>
                <div className="underline"></div>
              </div>
              <p className="m-t-20">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
                accusantium sapiente tempora.
              </p>
              <div className="grid-x m-t-20">
                <div className="cell small-1">
                  <FaAnchor />
                </div>
                <div className="cell small-10 text-left">
                  <span style={{ fontWeight: 800, marginBottom: "2px" }}>
                    Address :
                  </span>
                  <span>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Fugiat accusantium sapiente tempora.
                  </span>
                </div>
              </div>
              <div className="grid-x m-t-20">
                <div className="cell small-1">
                  <FaAnchor />
                </div>
                <div className="cell small-10 text-left">
                  <span style={{ fontWeight: 800, marginBottom: "2px" }}>
                    Address :
                  </span>
                  <span>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Fugiat accusantium sapiente tempora.
                  </span>
                </div>
              </div>
              <div className="grid-x m-t-20">
                <div className="cell small-1">
                  <FaAnchor />
                </div>
                <div className="cell small-10 text-left">
                  <span style={{ fontWeight: 800, marginBottom: "2px" }}>
                    Address :
                  </span>
                  <span>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Fugiat accusantium sapiente tempora.
                  </span>
                </div>
              </div>
              <div className="grid-x m-t-20">
                <div className="cell small-1">
                  <FaAnchor />
                </div>
                <div className="cell small-10 text-left">
                  <span style={{ fontWeight: 800, marginBottom: "2px" }}>
                    Address :
                  </span>
                  <span>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Fugiat accusantium sapiente tempora.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;

  .boxshadow {
    box-shadow: 1px 5px 20px 11px;
  }

  .login-backgorund {
    background: rgb(208, 108, 53);
    background: linear-gradient(
      90deg,
      rgba(208, 108, 53, 1) %,
      rgba(0, 212, 255, 1) 100%
    );
  }
`;

const InputField = styled.input`
  padding: 10px;
  font-size: 16px;
  border: none;
  border-bottom: 1px solid white;
  background-color: transparent;
  color: white;
  outline: none;
  width: 90%;

  ::placeholder {
    color: white;
  }

  &:focus {
    // border-color: #007bff;
    // box-shadow: 0 0 6px rgba(0, 123, 255, 0.5);
  }

  @media (min-width: 992px) {
    width: 100% important!;
  }
`;

const TextareaField = styled.textarea`
  padding: 10px;
  font-size: 16px;
  border: none;
  border: 1px solid white;
  background-color: transparent;
  color: white;
  outline: none;
  width: 90%;

  ::placeholder {
    color: white;
  }

  &:focus {
    // border-color: #007bff;
    // box-shadow: 0 0 6px rgba(0, 123, 255, 0.5);
  }
`;

const AddressTabs = styled.div`
  display: flex;
  grid-template-columns: 1fr 1fr;
  align-items: center;

  .tab-container {
    display: flex;
    align-items: center;
    position: relative;
    svg {
      height: 2rem;
      margin-left: 5px;
    }
  }
`;

export default ContactUs;
