import React from "react";
import "../styles/Home.css";
import Link from "next/link";
import Image from "next/image";

const Item = ({ className, picSrc, caption, src }) => {
  return (
    <div className={className}>
      <figure className="screenshot">
        <Image src={picSrc} alt="screenshot of the project" />
        <Link className="middle-link" href={src} target="_blank">
          See details
        </Link>
        <figcaption>{caption}</figcaption>
      </figure>
    </div>
  );
};

export default Item;
