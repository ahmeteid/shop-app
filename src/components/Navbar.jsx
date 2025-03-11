import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  return (
    <>
      <nav className="navbar">
        <div className="main-container">
          <NavLink to={"/"} className="logo">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="image"
              alt="Flowbite Logo"
            />
            <span className="title">Flowbite</span>
          </NavLink>
          <button
            data-collapse-toggle="navbar-solid-bg"
            type="button"
            className="btn-menu"
            aria-controls="navbar-solid-bg"
            aria-expanded={isMenuOpen}
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`nav-content ${isMenuOpen ? "block" : "hidden"}`}
            id="navbar-solid-bg"
          >
            <ul className="links-list">
              <li>
                <NavLink to={"/"} className="link" aria-current="page">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to={"/services"} className="link">
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to={"/pricing"} className="link">
                  Pricing
                </NavLink>
              </li>
              <li>
                <NavLink to={"/contact"} className="link">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
