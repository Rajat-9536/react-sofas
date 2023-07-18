import React, { useState } from "react";
import Navlinks from "./Navlinks";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { links } from "../Utils/constants";
import CartButton from "../Components/CartButton";
import { useProductsContext } from "../context/products_context";
import { FaBars } from "react-icons/fa";
import logo from "../assets/logo.svg";
import { useCartContext } from "../context/cart_context";
import { useUserContext } from "../context/user_context";

export const NavbarContext = React.createContext();

const Navbar = () => {

  const {myUser} = useUserContext();
  const { openSidebar } = useProductsContext();
  return (
    <NavContainer>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="comfy sloth" />
          </Link>

          <button type="button" className="nav-toggle" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          {links.map((link) => {
            const { id, text, url } = link;
            return (
              <li key={id}>
                <Link to={url}>{text}</Link>
              </li>
            );
          })}
          {
            myUser && (
              <li>
                <Link to="/checkout">Check Out</Link>
              </li>
            )
          }
        </ul>
        <CartButton />
      </div>
    </NavContainer>
  );

  // const [user,setUser] = useState({name:"Rajat Sharma"});
  // const logout = () =>{
  //   setUser(null);
  // };

  // return (
  //   <NavbarContext.Provider value={{user,logout}}>
  //     <Navlinks/>
  //   </NavbarContext.Provider>
  // );
};

const NavContainer = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }

  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 175px;
      margin-left: -15px;
    }
  }
  .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--clr-primary-5);
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }
  .nav-links {
    display: none;
  }
  .cart-btn-wrapper {
    display: none;
  }
  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .nav-links {
      display: flex;
      justify-content: center;
      li {
        list-style: none;
        margin: 0 0.5rem;
      }
      a {
        color: var(--clr-grey-3);
        font-size: 1rem;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        &:hover {
          border-bottom: 2px solid var(--clr-primary-7);
        }
      }
    }
    .cart-btn-wrapper {
      display: grid;
    }
  }
`;

export default Navbar;
