"use client";

import React, { useState, useEffect } from "react";
import "../styles/Navbar.css";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo2.png";

import { config } from '@fortawesome/fontawesome-svg-core' // 👈
import '@fortawesome/fontawesome-svg-core/styles.css' // 👈
config.autoAddCss = false // 👈
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareCaretDown,
  faSquareXmark,
  faHouse,
  faBarsProgress,
  faAt,
} from "@fortawesome/free-solid-svg-icons";
import { usePathname } from "next/navigation";

const MENU = <FontAwesomeIcon icon={faSquareCaretDown} />;
const XMARK = <FontAwesomeIcon icon={faSquareXmark} />;
const HOME = <FontAwesomeIcon icon={faHouse} />;
const PROJECTS = <FontAwesomeIcon icon={faBarsProgress} />;
const ABOUT = <FontAwesomeIcon icon={faAt} />;

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const [mobile, setMobile] = useState(window.innerWidth > 425 ? false : true);
  

  const path = usePathname();
  
  useEffect(() => {

    const handleResize = () => {
      const screenSize = window.innerWidth;

      if (screenSize < 426) {
        setMobile(true);
      } else {
        setMobile(false)
      }
    };

    // Add event listener when component mounts
    window.addEventListener("resize", handleResize);

    // Remove event listener when component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); 

  const handleClick = () => {
    mobile ? setClicked(!clicked) : setClicked(false);
  };

  return (
    <div className="navbar">
      <Link className="logo" href="/" onClick={() => setClicked(false)}>
        <Image src={logo} alt="logo" />
      </Link>
      {mobile ? (
        <i className="menu-icon" onClick={handleClick}>
          {clicked ? XMARK : MENU}
        </i>
      ) : null}
      <ul
        className={
          mobile
            ? `${clicked ? "nav-links-mob active" : "nav-links-mob"}`
            : "nav-links"
        }
        onClick={() => setClicked(false)}
      >
        <Link
          className={`link ${path == "/" ? "active" : null}`}
          href="/"
          title="Home page"
        >
          {HOME} Home
        </Link>
        <Link
          className={`link ${path == "/projects" ? "active" : null}`}
          href="/projects"
          title="Projects page"
        >
          {PROJECTS} Projects
        </Link>
        <Link
          className={`link ${path == "/about" ? "active" : null}`}
          href="/about"
          title="Contact page"
        >
          {ABOUT} About
        </Link>
        {mobile && clicked ? (
          <h4 className="developer-text">Developed By JakChi</h4>
        ) : null}
      </ul>
    </div>
  );
};

export default Navbar;
