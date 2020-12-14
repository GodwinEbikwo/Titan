import React from "react";
import Image from "next/image";
import Header from "../src/components/header";

export default function pageTwo() {
  return (
    <>
      <Header />
      <section className="call" data-scroll-section>
        <div className="container container--pall">
          <div className="c-grid">
            <div className="left">
              <h1>The most transparent and secure bank ever.</h1>
              <p>
                With Titan, we completely reinvented the credit card. Your
                information lives on your iPhone, beautifully laid out and easy
                to understand
              </p>
              <a href="/" className="btn">
                Get Started
              </a>
            </div>
            <div className="right">
              <div className="circle">
                <Image src="/one.jpg" width={640} height={960} alt="image" />
              </div>

              <div className="circle right">
                <Image src="/two.jpg" width={500} height={799} alt="image" />
              </div>

              <div className="circle bottomleft">
                <Image src="/4.jpg" width={250} height={200} alt="image" />
                {/* <Image src="/7.jpg" width={2550} height={3188} alt="image" /> */}
              </div>

              <div className="circle bottomright">
                <Image src="/6.jpg" width={2814} height={3518} alt="image" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Bottom />
    </>
  );
}
