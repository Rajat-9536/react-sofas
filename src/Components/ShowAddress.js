import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";

const EditAddress = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [addresses, setAddresses] = useState([]);
  useEffect(() => {
    try {
      fetch("/api/address")
        .then((response) => response.json())
        .then((data) => {
          setAddresses(data);
        });
    } catch (error) {
      console.error("error fetching address data:", error);
    }
  }, []);

  const handleEdit = () =>{
    setIsEditMode(true);
  }
  return (
    <>
      {addresses.map((prod) => {
        const {
          fullname,
          mobile_number,
          locality,
          street_address,
          city,
          postal_code,
          state,
          landmark,
          alternate_phone_number,
        } = prod;

        return (
          <div>
            <div className="grid-x grid-padding-x">
              <div
                className="cell small-12 medium-12 large-12 m-t-b-30"
                style={{ borderBottom: "2px solid black" }}
              >
                <Link>
                  <div className="grid-x">
                    <div className="cell small-1">
                      <input type="radio" value="option1" />
                    </div>
                    <div className="cell small-10">
                      <div className="grid-x">
                        <div className="cell small-12">
                          <span className="fg-dark" style={{ fontWeight: 700 }}>
                            {fullname}
                          </span>
                          <span
                            className="fg-dark m-l-30"
                            style={{ fontWeight: 700 }}
                          >
                            {mobile_number}
                            {", "}
                          </span>
                          <span className="fg-dark" style={{ fontWeight: 700 }}>
                            {alternate_phone_number}
                          </span>
                        </div>
                        <div className="cell small-12">
                          <span className="fg-dark">
                            {street_address}
                            {", "}
                          </span>
                          <span className="fg-dark">{locality}, </span>
                          <span className="fg-dark">{landmark} </span>
                          <span className="fg-dark">{city}, </span>
                          <span className="fg-dark">{state}</span>
                          <span className="fg-dark" style={{ fontWeight: 500 }}>
                            {" - "} {postal_code}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="cell small-1">
                      <button className="btn">edit</button>
                    </div>
                    <div className="cell small-10 small-offset-1 m-t-15 m-b-20">
                      <button className="btn">Deliver Here</button>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

const Wrapper = styled.section``;

export default EditAddress;
