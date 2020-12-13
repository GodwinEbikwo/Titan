import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero" data-scroll-section>
      <div className="container container--pall">
        <div className="grid">
          <div className="left">
            <h1>The most transparent and secure bank ever.</h1>
            <p>
              With Titan, we completely reinvented the credit card. Your
              information lives on your iPhone, beautifully laid out and easy to
              understand. We eliminated fees and built tools to help you pay
              less interest.
            </p>
            <a href="/" className="btn">
              Apply Now
            </a>
          </div>
          <div className="right">
            <div className="circle"></div>
            <SecondCard />
            <Card />
          </div>
        </div>
      </div>
    </section>
  );
}

export const Card = () => {
  return (
    <div className="card">
      <div className="box container container--pall">
        <div className="box_top">
          <span>Titan</span>
        </div>
        <div className="box__head">
          <span>2341</span>
          <span>5256</span>
          <span>7316</span>
          <span>9107</span>
        </div>

        <div className="box-center">
          <div>
            <span id="ed">EXP-DATE:</span>
            <span>9/22</span>
          </div>
          <div>
            <Image src="/credit-card.svg" width={40} height={40} />
          </div>
        </div>

        <div className="box__bottom">
          <div>
            <span>2341 0972 6284 4563</span>
            <h2 className="heap">ALISHA G MAHAJAN</h2>
          </div>

          <div>
            <Image src="/mc.svg" width={50} height={50} />
          </div>
        </div>
      </div>
    </div>
  );
};

const SecondCard = () => {
  return (
    <div className="scard">
      <div className="horizontal">
        <div className="top">
          <span>Titan</span>
        </div>
        <div className="center">
          <h1>Chiamaka odunsi tobi</h1>
        </div>

        <div className="bottom">
          <Image src="/mc.svg" width={50} height={50} />
        </div>

        <div className="right hide-for-desktop">
          <Image src="/credit-card.svg" width={35} height={35} />
        </div>
      </div>
    </div>
  );
};
