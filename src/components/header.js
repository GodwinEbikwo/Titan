import React, { useContext } from "react";
import { SmoothScrollContext } from "../utils/SmoothScroll.utils";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const { scroll } = useContext(SmoothScrollContext);

  const goToAbout = (event) => {
    event.preventDefault();
    scroll && scroll.scrollTo("#about");
  };
  const goToServices = (event) => {
    event.preventDefault();
    scroll && scroll.scrollTo("#services");
  };
  const goToWork = (event) => {
    event.preventDefault();
    scroll && scroll.scrollTo("#work");
  };

  const goToFAQ = (event) => {
    event.preventDefault();
    scroll && scroll.scrollTo("#faq");
  };
  return (
    <section data-scroll-section>
      <div className="dheader">
        <nav className="container container--pall flex flex-jc-sb flex-ai-c">
          <Link href="/">
            <a className="dheader__logo">
              <Image src="/titan.svg" width={96} height={27} alt="titan-logo" />
            </a>
          </Link>

          <div className="dheader__links hide-for-mobile">
            <a href="#about" onClick={goToAbout}>
              About
            </a>
            <a href="#services" onClick={goToServices}>
              Services
            </a>
            <a href="#work" onClick={goToWork}>
              Work
            </a>
            <a href="#contact" onClick={goToFAQ}>
              FAQ's
            </a>
            <a href="#contact" onClick={goToFAQ} className="btn">
              Dowload App →
            </a>
          </div>
        </nav>
      </div>
    </section>
  );
}
