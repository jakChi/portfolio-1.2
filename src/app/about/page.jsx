"use client"

import React, { useState } from "react";
import "../../styles/About.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
//import { Link } from "react-router-dom";
//import resume from "../../assets/files/resume2.docx.pdf";

const Contact = () => {
  const [input, setInput] = useState("");
  const [email, setEmail] = useState("");
  // const [pdfOpen, setPdfOpen] = useState(false);

  const actionUrlAgent = `mailto:kobachincharauli8@gmail.com?subject=New customer from portfolio&body=Hi, Contact me on this email: ${email}!`;
  const actionUrlGmail = `https://mail.google.com/mail/?view=cm&fs=1&to=kobachincharauli5@gmail.com&su=New+Customer+from+portfolio&body=Hi,+contact+me+on+this+email:+${email}`;
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
    <div className="contact">
      <section class="heading">
        <header class="hero">
          <Image
            src="https://cdn.freecodecamp.org/platform/universal/fcc_meta_1920X1080-indigo.png"
            width={1280}
            height={200}
            alt="freecodecamp logo"
            loading="lazy"
            class="hero-img"
          />
          <h1 class="hero-title">Things About Me</h1>
          <p class="hero-subtitle">
            Nobody cares about it but why not be written somewhere
          </p>
        </header>
        <div class="author">
          <p class="author-name">
            By
            <a href="https://freecodecamp.org" target="_blank" rel="noreferrer"
              >freeCodeCamp</a
            >
          </p>
          <p class="publish-date">March 7, 2019</p>
        </div>
        <div class="social-icons">
          <a href="https://www.facebook.com/freecodecamp/">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com/freecodecamp/">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com/freecodecamp">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/school/free-code-camp/">
            <i class="fab fa-linkedin-in"></i>
          </a>
          <a href="https://www.youtube.com/freecodecamp">
            <i class="fab fa-youtube"></i>
          </a>
        </div>
      </section>
      <section class="text">
        <p class="first-paragraph">
          Soon the freeCodeCamp curriculum will be 100% project-driven learning. Instead of a series of coding challenges, you'll learn through building projects - step by step. Before we get into the details, let me emphasize: we are not changing the certifications. All 6 certifications will still have the same 5 required projects. We are only changing the optional coding challenges.
        </p>
        <p>
          After years - years - of pondering these two problems and how to solve them, I slipped, hit my head on the sink, and when I came to I had a revelation! A vision! A picture in my head! A picture of this! This is what makes time travel possible: the flux capacitor!
        </p>
        <p>
          It as dramatic arevelation in Back to the Future. It
          just occurred to me while I was going for a run. The revelation: the entire curriculum should be a series of projects. Instead of individual coding challenges, we'll just have projects, each with their own seamless series of tests. Each test gives you just enough information to figure out how to get it to pass. (And you can view hints if that isn't enough.)
        </p>
        <blockquote>
          <hr />
          <p class="quote">
            The entire curriculum should be a series of projects
          </p>
          <hr />
        </blockquote>
        <p>
          No more walls of explanatory text. No more walls of tests. Just one
          test at a time, as you build up a working project. Over the course of passing thousands of tests, you build up projects and your own understanding of coding fundamentals. There is no transition between lessons and projects, because the lessons themselves are baked into projects. And there's plenty of repetition to help you retain everything because - hey - building projects in real life has plenty of repetition.
        </p>
        <p>
          The main design challenge is taking what is currently paragraphs of explanation and instructions and packing them into a single test description text. Each project will involve dozens of tests like this. People will be coding the entire time, rather than switching back and forth from "reading mode" to "coding mode".
        </p>
        <p>
          Instead of a series of coding challenges, people will be in their code editor passing one test after another, quickly building up a project. People will get into a real flow state, similar to what they experience when they build the required projects at the end of each certification. They'll get that sense of forward progress right from the beginning. And freeCodeCamp will be a much smoother experience.
        </p>
      </section>
      <section class="text text-with-images">
        <article class="brief-history">
          <h3 class="list-title">A Brief History</h3>
          <p>Of the Curriculum</p>
          <ul class="lists">
            <li>
              <h4 class="list-subtitle">V1 - 2014</h4>
              <p>
                We launched freeCodeCamp with a simple list of 15 resources,
                including  CS50 and  Database Class.
              </p>
            </li>
            <li>
              <h4 class="list-subtitle">V2 - 2015</h4>
              <p>We added interactive algorithm challenges.</p>
            </li>
            <li>
              <h4 class="list-subtitle">V3 - 2015</h4>
              <p>
                We added our own HTML+CSS challenges (beforeeen relying on
                General  Dash course for these).
              </p>
            </li>
            <li>
              <h4 class="list-subtitle">V4 - 2016</h4>
              <p>
                We expanded the curriculum to 3 certifications, including Front
                End, Back End, and Data Visualization. They each had 10 required
                projects, but only the Front End section had its own challenges.
                For the other certs, we were still using external resources like
                Node School.
              </p>
            </li>
            <li>
              <h4 class="list-subtitle">V5 - 2017</h4>
              <p>We added the back end and data visualization challenges.</p>
            </li>
            <li>
              <h4 class="list-subtitle">V6 - 2018</h4>
              <p>
                We launched 6 new certifications to replace our old ones. This was
                the biggest curriculum improvement to date.
              </p>
            </li>
          </ul>
        </article>
        <aside class="image-wrapper">
          <blockquote class="image-quote">
            <hr />
            <p class="quote">
              The millions of people who are learning to code through freeCodeCamp
              will have an even better resource to help them learn these
              fundamentals.
            </p>
            <hr />
          </blockquote>
        </aside>
      </section>
      <section className="info">
        <div className="about-div">
          <h1 className="title">About me</h1>
          <ul className="about-list">
            <li>I am a self taught React developer</li>
            <li>Currently my study field is Computational biology</li>
            <li>I can provide you with my full attention</li>
            <li>
              I will always be in touch with you and you can contact me any time
            </li>
          </ul>
        </div>
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
        {/* <button className="resume-btn" onClick={() => setPdfOpen(!pdfOpen)}>
          {pdfOpen ? "close" : "open"} resume
        </button>
        {pdfOpen ? (
          <embed src={resume} type="application/pdf" className="resume" />
        ) : null} */}
      </section>
      <section className="email">
        <form
          className="email-form"
          action={window.innerWidth < 800 ? actionUrlAgent : actionUrlGmail}
          target="_blank"
          method="post"
          onSubmit={handleSubmit}
        >
          <label className="email-label">
            {PLANE} Sumbit your email and I will reach out
            <input
              req="true"
              className="email-input"
              type="email"
              placeholder="Input your email here"
              value={input}
              onChange={handleChange}
            />
          </label>
          <p className={`sub-text ${input ? "active" : null}`}>
            press enter key to submit your email <i>{BULB}</i>
          </p>
          {/* I want to show this button only when user types correctly formated email address it needs regex
          <input className={`sub-button ${input ? "active" : null}`} type="submit" onClick={handleSubmit} />*/}
        </form>
      </section>
    </div>
  );
};

export default Contact;
