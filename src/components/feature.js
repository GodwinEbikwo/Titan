import React from "react";
import Image from "next/image";

export default function Feature() {
  return (
    <section className="feature" data-scroll-section>
      <div className="feature_container container container--pall">
        <div className="feature-right">
          <div className="feature-content">
            <span className="label">Perks</span>
            <h1 className="bc-title">
              Zero fees at all, not even the hidden ones
            </h1>

            <div className="block-features">
              <FeatureBlock
                title="No hidden costs"
                content=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, facilis esse voluptate,"
              />
              <FeatureBlock
                title="Flexible plan"
                content="Lorem ipsum  consectetur adipisicing elit. In blanditiis ea sapiente, quisquam  voluptatum."
              />
              <FeatureBlock
                title="24/7 customer support"
                content=" Lorem ipsum dolor sit amet consectetur adipisicing elit. a quasi esse"
              />
              <FeatureBlock
                title="Custom payment plan"
                content="Lorem ipsum dolor elit quisquam voluptatibus dolorem voluptatum."
              />
            </div>
          </div>
        </div>

        <div className="feature-left">
          <div className="feature-img">
            <div className="shape"></div>
            <div className="shape small"></div>
            <div className="shape three"></div>
            <FeatureCard />
          </div>
        </div>
      </div>
    </section>
  );
}

const FeatureCard = () => {
  return (
    <div className="f-card">
      <div className="f-horizontal">
        <div className="f-top">
          <span>Titan</span>
        </div>
        <div className="f-center">
          <h1>ZERO</h1>
        </div>

        <div className="f-bottom">
          <Image src="/mc.svg" width={50} height={50} />
        </div>

        <div className="f-bleft hide-for-desktop">
          <Image src="/credit-card.svg" width={30} height={30} />
        </div>
      </div>
    </div>
  );
};

const FeatureBlock = ({ title, content }) => {
  return (
    <div className="block-feature">
      <div className="bf-bold">{title}</div>
      <p className="bf-p">{content}</p>
    </div>
  );
};
