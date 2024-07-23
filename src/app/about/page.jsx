"use client";

import React, { useState } from "react";
import "../../styles/About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

import Link from "next/link";
//import resume from "../../assets/files/resume2.docx.pdf";

const Contact = () => {
  const [pdfOpen, setPdfOpen] = useState(false);

  return (
    <div className="contact">
      <div className="grid">
        <section className="heading">
          <header className="about-hero">
            <h1 className="hero-title">My journey</h1>
            <p className="hero-subtitle">
              Blog about my experience in the huge and amazing field of
              programming
            </p>
          </header>
          <div className="author">
            <p className="author-name">
              By
              <Link
                href="https://github.com/jakChi"
                target="_blank"
                rel="noreferrer"
              >
                jakChi
              </Link>
            </p>
            <p className="publish-date">October 13, 2023</p>
          </div>
          <div className="social-icons">
            <Link
              href="https://www.facebook.com/jacob.tchintcharauli"
              target="_blank"
            >
              <i>
                <FontAwesomeIcon icon={faFacebookF} />
              </i>
            </Link>
            <Link href="https://twitter.com/iakob23499435" target="_blank">
              <i>
                {" "}
                <FontAwesomeIcon icon={faTwitter} />
              </i>
            </Link>
            <Link
              href="https://www.instagram.com/echoes_of_eclipse/"
              target="_blank"
            >
              <i>
                <FontAwesomeIcon icon={faInstagram} />
              </i>
            </Link>
            <Link
              href="https://www.linkedin.com/in/jakob-tchintcharauli-b11553252/"
              target="_blank"
            >
              <i>
                <FontAwesomeIcon icon={faLinkedin} />
              </i>
            </Link>
            <Link href="https://github.com/jakChi" target="_blank">
              <i>
                <FontAwesomeIcon icon={faGithub} />
              </i>
            </Link>
          </div>
        </section>
        <section className="text">
          <p className="first-paragraph">
            Technology always made me curious, I was born in the 2000's when the
            world wasn't like it's today. Phone was very rare things which was
            the things that only adults cuold have even though i didn't know
            anything i could always find some games in them if i had chance of
            having this magical divice in my hands.
          </p>
          <p>
            The first Computer that my family bought was laptop of HP, it was a
            treaure you should be very careful with and at first i didn't even
            know how to turn it off. Then time passed and I learned some tricks
            of this monster, but I only was playing video games at that time.
          </p>
          <p>
            Let's fast forward by 10 years. In 2022 I knew English well enough
            that I decided to learn Programming on Khan Academy, this was my
            first steps into computer scinece and I really liked process of
            coding, even thought I was just drawing some figures on the canvas
            in the khanAcademy's IDE and had no idea what programming was.
          </p>
          <blockquote>
            <hr />
            <p className="quote">
              Put your heart, mind, and soul into even your smallest acts. This
              is the secret of success.
            </p>
            <hr />
          </blockquote>
          <p>
            Then I found local comunity of programmers and they recommended many
            free resources on the internet. I learnt Responsive Web Design and
            JS fundamentals in FreeCodeCamp course. Then I learnet about React
            and its powers.
          </p>
          <p>
            After that I'm working on my project and portfolio alongside
            studying computational biology at my University. currently I am
            working with nextJs and Tailwind CSS, as well as Firebase and my Aim
            is to learn some backend programming too.
          </p>
          <p>
            This was A very short and humble story of my adventrue in Front-end
            web development world. Hope I didn't bore you and you will be
            interested in working with me. Thanks for your time and attention.
            Good luck!
          </p>
        </section>
      </div>

      {/* <button className="resume-btn" onClick={() => setPdfOpen(!pdfOpen)}>
          {pdfOpen ? "close" : "open"} resume
        </button>
        {pdfOpen ? (
          <embed src={resume} type="application/pdf" className="resume" />
        ) : null} */}
    </div>
  );
};

export default Contact;
