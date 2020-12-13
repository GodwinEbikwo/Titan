import React from "react";
import { Card } from "./hero";
import Image from "next/image";

export default function Perktwo() {
  return (
    <section className="perktwo" data-scroll-section>
      <div className="perktwo_container container container--pall">
        <div className="perktwo-left">
          <span className="perk-label">Savings</span>
          <h2 className="perk-title">Unlimited daily cash back</h2>

          <div className="save-features">
            <SaveFeature
              title="Small Small"
              content=" Lorem ipsum consectetur adipisicing elit. a quasi esse voluptate, repudiandae, quo maxime."
            />
            <SaveFeature
              title="PAYG"
              content="Lorem ipsum  consectetur adipisicing. In blanditiis ea sapiente,  dolorem voluptatum."
            />
            <SaveFeature
              title="No hidden fee"
              content=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, facilis aut quis et, quo maxime."
            />
            <SaveFeature
              title="Interest on savings"
              content="Lorem ipsum dolor  elit. In blanditiis ea sapiente, quisquam voluptatibus dolorem voluptatum."
            />
          </div>
        </div>

        <div className="perk_right">
          <div className="perk-img">
            <div className="perkShape"></div>
            <div className="perkShape small"></div>
            <div className="perkShape three"></div>
            <PerkCard />
          </div>
        </div>
      </div>
    </section>
  );
}

const SaveFeature = ({ title, content }) => {
  return (
    <div className="save-feature">
      <div className="bf-bold">{title}</div>
      <p className="bf-p">{content}</p>
    </div>
  );
};

const PerkCard = () => {
  return (
    <div className="perkcontainer">
      <div className="perkcard">
        <div className="perk_top">
          <span>Titan</span>
        </div>

        <div className="perk_head">
          <span>UNLIMITED</span>
          <span>UNLIMITED</span>
        </div>

        <div className="pt-expiry">
          <div>
            <span id="ed">EXP-DATE:</span>
            <span>NEVER</span>
          </div>
        </div>

        <div className="pbox__bottom">
          <div>
            <span>XXXX XXXX XXXX XXX</span>
            <h2 className="heap">UNLIMITED JOE</h2>
          </div>

          <div>
            <Image src="/mc.svg" width={50} height={50} />
          </div>
        </div>
      </div>
    </div>
  );
};
