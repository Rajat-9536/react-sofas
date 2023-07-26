import React from "react";
import styled from "styled-components";
import CalltoAction from "./CalltoAction";
import { useCartContext } from "../context/cart_context";
import StripeCheckout from "../Components/StripeCheckout";
import { Link } from "react-router-dom";
import ManageAddress from "../Components/ManageAddress";

const Checkout = ({ title }) => {
  const { cart } = useCartContext();
  return (
    <main>
      <CalltoAction title="Checkout" />
      <Wrapper className="page-100">
        {cart.length < 1 ? (
          <div className="empty">
            <div>
            <h2>your cart is empty</h2>
            <Link to="/products" className="btn">
              fill it
            </Link>
            </div>
          </div>
        ) : (
          <StripeCheckout />
        )}
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-item: center;
  justify-content: center;
  .empty {
    text-align: center;
  }
`;

export default Checkout;
