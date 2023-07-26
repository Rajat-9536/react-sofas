import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";

const EditAddress = () => {
  const [fullname, setFullname] = useState("");
  const [mobile_number, setMobile_number] = useState("");
  const [locality, setlocality] = useState("");

  const [street_address, setStreet_address] = useState("");
  const [city, setCity] = useState("");
  const [postal_code, setPostal_code] = useState("");

  const [state, setstate] = useState("");
  const [landmark, setlandmark] = useState("");
  const [alternate_phone_number, setalternate_phone_number] = useState("");

  const [showAddressForm, setShowAddressForm] = useState(false);

  const handleProceedToCheckout = () => {
    setShowAddressForm(true);
  };

  //   const handleAddressChange = (event) => {
  //     const { name, value } = event.target;
  //     setAddress((prevAddress) => ({ ...prevAddress, [name]: value }));
  //   };

  //   const handleAddressSubmit = async (event) => {
  //     event.preventDefault();
  //     try {
  //       await axios.post("/api/address", address);
  //       console.log("Address successfully saved!");
  //       // Perform any further actions, e.g., proceed to the payment page
  //     } catch (error) {
  //       console.error("Error saving address:", error);
  //     }
  //   };

  const handleAddressSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("/api/address", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullname,
          mobile_number,
          locality,
          street_address,
          city,
          postal_code,
          state,
          landmark,
          alternate_phone_number,
        }),
      });

      const data = await response.json();
      console.log(data);
      console.log("Address successfully saved!");
      // Perform any further actions, e.g., proceed to the payment page
    } catch (error) {
      console.error("Error saving address:", error);
    }
  };

  return (
    <Wrapper className=" ">
      <div className="grid-x grid-padding-x">
        <div className="cell small-12 medium-12 large-10 m-t-30 m-b-30">
          <form onSubmit={handleAddressSubmit}>
            <div className="grid-x grid-margin-x">
              <div className="cell small-12 large-6 ">
                <label className="address-label">
                  Full Name*
                  <input
                    className="address-input-field"
                    type="text"
                    name="fullname"
                    value={fullname}
                    required
                    onChange={(event) => setFullname(event.target.value)}
                  />
                </label>
              </div>
              <div className="cell small-12 large-6 ">
                <label className="address-label">
                  Mobile Number*
                  <input
                    className="address-input-field"
                    type="text"
                    name="mobile_number"
                    value={mobile_number}
                    required
                    onChange={(event) => setMobile_number(event.target.value)}
                  />
                </label>
              </div>
            </div>
            <div className="grid-x grid-margin-x m-t-20">
              <div className="cell small-12 large-6">
                <label className="address-label">
                  Pin Code*
                  <input
                    className="address-input-field"
                    type="text"
                    name="postal_code"
                    value={postal_code}
                    required
                    onChange={(event) => setPostal_code(event.target.value)}
                  />
                </label>
              </div>
              <div className="cell small-12 large-6">
                <label className="address-label">
                  Locality*
                  <input
                    className="address-input-field"
                    type="text"
                    name="locality"
                    value={locality}
                    required
                    onChange={(event) => setlocality(event.target.value)}
                  />
                </label>
              </div>
            </div>
            <div className="grid-x grid-margin-x m-t-20">
              <div className="cell small-12">
                <label className="address-label">
                  Address*
                  <input
                    className="address-input-field"
                    type="text"
                    name="street_address"
                    value={street_address}
                    required
                    onChange={(event) => setStreet_address(event.target.value)}
                  />
                </label>
              </div>
            </div>
            <div className="grid-x grid-margin-x m-t-20">
              <div className="cell small-12 large-6">
                <label className="address-label">
                  City*
                  <input
                    className="address-input-field"
                    type="text"
                    name="city"
                    value={city}
                    required
                    onChange={(event) => setCity(event.target.value)}
                  />
                </label>
              </div>
              <div className="cell small-12 large-6">
                <label className="address-label">
                  State*
                  <input
                    className="address-input-field"
                    type="text"
                    name="state"
                    value={state}
                    required
                    onChange={(event) => setstate(event.target.value)}
                  />
                </label>
              </div>
            </div>
            <div className="grid-x grid-margin-x m-t-20">
              <div className="cell small-12 large-6 ">
                <label className="address-label">
                  Landmark (Optional)
                  <input
                    className="address-input-field"
                    type="text"
                    name="landmark"
                    value={landmark}
                    onChange={(event) => setlandmark(event.target.value)}
                  />
                </label>
              </div>
              <div className="cell small-12 large-6 ">
                <label className="address-label">
                  Alternate Phone Number (Optional)
                  <input
                    className="address-input-field"
                    type="text"
                    name="alternate_phone_number"
                    value={alternate_phone_number}
                    onChange={(event) =>
                      setalternate_phone_number(event.target.value)
                    }
                  />
                </label>
              </div>
            </div>
            <button className="btn m-t-30" type="submit">
              Submit Address
            </button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .address-input-field {
    width: 100%;
    font-size: 14px;
    border: 1px solid black;
    outline: none;
    border-radius: 2px;
    padding: 10px 16px 13px 13px;
    box-shadow: none;
  }

  .address-label {
    font-weight: 700;
    position: ;
    left: 0;
    top: 0;
    transform-origin: top left;
    padding: 18px 0 0;
    font-size: 14px;
    color: var(--color-grey-grade4);
    transition: transform 0.2s ease;
  }

  .relative {
    position: relative;
  }
`;

export default EditAddress;
