"use client";

import React, { useState } from "react";
import "../styles/Footer.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faXTwitter,
  faLinkedinIn,
  faGithub,
  faCodepen,
} from "@fortawesome/free-brands-svg-icons";
import { faLightbulb, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const FACEBOOK = <FontAwesomeIcon icon={faFacebookF} />;
const X = <FontAwesomeIcon icon={faXTwitter} />;
const LINKEDIN = <FontAwesomeIcon icon={faLinkedinIn} />;
const GIT = <FontAwesomeIcon icon={faGithub} />;
const CODE_PEN = <FontAwesomeIcon icon={faCodepen} />;
//const MAIL = <FontAwesomeIcon icon={faAt} />;

const Footer = () => {
  const [input, setInput] = useState("");
  const [email, setEmail] = useState("");

  const actionUrlAgent = `mailto:kobachincharauli8@gmail.com?subject=New customer from portfolio&body=Hi, Contact me on this email: ${email}!`;
  //const actionUrlGmail = `https://mail.google.com/mail/?view=cm&fs=1&to=kobachincharauli5@gmail.com&su=New+Customer+from+portfolio&body=Hi,+contact+me+on+this+email:+${email}`;
  //const emailVerifier = `https://api.zerobounce.net/v2/validate?api_key=026944d604b143a78d0892c187f0c872&email=${email}`; -- verifier API

  const BULB = <FontAwesomeIcon icon={faLightbulb} />;
  const PLANE = <FontAwesomeIcon icon={faPaperPlane} />;

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = () => {
    setEmail(input);
    setInput("");
    /*
    this should check if email address is valid or not but it costs a money so I won't use it now
    fetch(emailVerifier).then((res) => res.json()).then((data) => console.log(data));
    */
  };
  return (
    <div className="footer">
      <div className="sections">
        <section className="links-section">
          <ul className="soc-links">
            <Link
              href="https://www.facebook.com/jacob.tchintcharauli"
              target="_blank"
              title="Facebook profile"
            >
              <i>{FACEBOOK}</i>
            </Link>
            <Link
              href="https://twitter.com/iakob23499435"
              target="_blank"
              title="Twitter profile"
            >
              <i>{X}</i>
            </Link>
            <Link
              href="https://www.linkedin.com/in/jakob-tchintcharauli-b11553252/"
              target="_blank"
              title="Linkedin profile"
            >
              <i>{LINKEDIN}</i>
            </Link>
            <Link
              href="https://github.com/jakChi"
              target="_blank"
              title="Github profile"
            >
              <i>{GIT}</i>
            </Link>
            <Link
              href="https://codepen.io/CamperIO"
              target="_blank"
              title="Codepen profile"
            >
              <i>{CODE_PEN}</i>
            </Link>
          </ul>
        </section>
        <section className="info-section">
          <div className="product-div">
            <h1 className="title">What I offer</h1>
            <ul className="product-list">
              <li>
                Development of your SPA
                <span className="gradient-word"> Frontend</span>
              </li>
              <li>Written with newest technologies</li>
              <li>
                <span className="gradient-word">React</span> Hooks / Class based
                components
              </li>
              <li>
                <span className="gradient-word">ES6</span> javascript
              </li>
              <li>
                Fully RWD with <span className="gradient-word">CSS3</span>
              </li>
              <li>3 months free bug fix</li>
              <li>1 months free changes for new customers</li>
            </ul>
          </div>
        </section>
        <section className="email-section">
          <h2 className="email-heading">
            Sumbit your email and I will reach out
          </h2>
          <form
            className="email-form"
            action={actionUrlAgent}
            target="_blank"
            method="post"
            onSubmit={handleSubmit}
          >
            <input
              req="true"
              className="email-input"
              type="email"
              placeholder="Input your email here"
              autoComplete="email"
              value={input}
              onChange={handleChange}
            />
            <button
              className={`email-submit-btn ${input ? "active" : null}`}
              disabled={!input}
            >
              {PLANE}
            </button>
          </form>
        </section>
      </div>
      <address className="copyright">
        <p>
          &copy; Designed and developed by jakChi 2023 | All Rights Reserved
        </p>
      </address>
    </div>
  );
};

export default Footer;
