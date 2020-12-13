import React from "react";
import Image from "next/image";

export default function PerkThree() {
  return (
    <section className="P-three" data-scroll-section>
      <div className="p3_grid container container--pall">
        <div className="p3_right">
          <div className="p3c-one">
            <div className="logo">
              <h1>TITAN</h1>
            </div>
          </div>

          <div className="p3c-one two" data-scroll data-scroll-speed="1">
            <div className="logo">
              <h1>TITAN</h1>
            </div>
          </div>

          <div className="p3c-one three" data-scroll data-scroll-speed="1">
            <div className="logo">
              <h1>TITAN</h1>
            </div>
          </div>

          <div className="p3c-one four" data-scroll data-scroll-speed="1">
            <div className="name-l">
              <h1>TITAN</h1>
            </div>

            <div className="name">
              <h1>Stacey Funke Dash</h1>
              <Image
                src="/credit-card.svg"
                width={40}
                height={40}
                className="cc"
              />
            </div>

            <div className="image">
              <Image src="/mc.svg" width={50} height={50} />
            </div>
          </div>
        </div>

        <div className="p3_left">
          <span className="p3-label">Security</span>
          <h2 className="p3-title">Your card, your data, your business</h2>

          <div className="p3_features">
            <P3Block
              title="2FA-Authentication"
              content=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, facilis esse voluptate,"
            />
            <P3Block
              title="Face authentication"
              content="Lorem ipsum  consectetur adipisicing elit. In blanditiis ea sapiente, quisquam  voluptatum."
            />
            <P3Block
              title="Finger print"
              content=" Lorem ipsum dolor sit amet consectetur adipisicing elit. a quasi esse"
            />
            <P3Block
              title="Data saved on your phone"
              content="Lorem ipsum dolor elit quisquam voluptatibus dolorem voluptatum."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

const P3Feature = () => {
  return (
    <p className="p3-p">
      <span className="p3-bold">Work </span>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, placeat.
    </p>
  );
};

const P3Block = ({ title, content }) => {
  return (
    <div className="p3_feature">
      <div className="bf-bold">{title}</div>
      <p className="bf-p">{content}</p>
    </div>
  );
};
