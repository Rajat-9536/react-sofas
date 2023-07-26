import React, { useState } from "react";
import CartTotals from "./CartTotals";
import EditAddress from "./EditAddress";
import ShowAddress from "./ShowAddress";

const ManageAddress = () => {
  return (
    <div className="grid-x grid-container">
      <div className="cell m-b-80">
        <div className="grid-x grid-margin-x">
          <div
            className="cell small-12 medium-12 large-8"
            style={{ backgroundColor: "#2874f0" }}
          >
            <h5 className="fg-light m-t-10 m-l-20">Delivery Address</h5>
            <div className="grid-x primary">
              <div className="cell small-12">
                <ShowAddress />
                <EditAddress />
              </div>
            </div>
          </div>
          <div className="cell small-12 medium-12 large-4">
            <CartTotals />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageAddress;
