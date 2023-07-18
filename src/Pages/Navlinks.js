import React, { useState } from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "../Components/ThemeToggle";
import UserContainers from "./UserContainers";

const Navlinks = () => {
  return (
    <nav>
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="dropdown menu" data-dropdown-menu>
            <li className="menu-text">Site Title</li>
            <li>
              <Link
                to="/"
                className={({ isActive }) =>
                  isActive ? "primary" : "secondary"
                }
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about"
                className={({ isActive }) =>
                  isActive ? "fg-primary" : "fg-gray"
                }
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="products"
                className={({ isActive }) =>
                  isActive ? "fg-primary" : "fg-gray"
                }
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                className={({ isActive }) =>
                  isActive ? "fg-primary" : "fg-gray"
                }
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="login"
                className={({ isActive }) =>
                  isActive ? "fg-primary" : "fg-gray"
                }
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to="signup"
                className={({ isActive }) =>
                  isActive ? "fg-primary" : "fg-gray"
                }
              >
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li>
              <ThemeToggle />
            </li>
            <li>
              <input type="search" placeholder="Search" />
            </li>
            <li className=" p-r-15">
              <button type="button" className="button">
                Search
              </button>
            </li>
            <li>
                <UserContainers/>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navlinks;
