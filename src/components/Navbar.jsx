"use client";

import React, { useState, useEffect } from "react";
import "../styles/Navbar.css";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo2.png";

import { config } from "@fortawesome/fontawesome-svg-core"; // 👈
import "@fortawesome/fontawesome-svg-core/styles.css"; // 👈
config.autoAddCss = false; // 👈

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

  const path = usePathname();

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div className="navbar">
      <Link className="logo" href="/" onClick={() => setClicked(false)}>
        <Image src={logo} alt="logo" />
      </Link>

      <i className="menu-icon" onClick={handleClick}>
        {clicked ? XMARK : MENU}
      </i>

      <ul
        className={`${clicked ? "nav-links-mob active" : "nav-links-mob"}`}
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
        <h4 className="developer-text">Developed and Designed By JakChi</h4>
      </ul>
    </div>
  );
};

export default Navbar;
