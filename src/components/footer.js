import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="footer" data-scroll-section>
      <div className="container container--pall">
        <div className="f_grid">
          <div className="block left">
            <div className="block-88">
              <a href="/" className="link">
                <Image src="/t-footer.svg" width={86} height={50} alt="image" />
              </a>

              <div className="block-82">
                <a href="/">
                  <Image src="/mc.svg" width={33} height={33} alt="image" />
                </a>
                <a href="/">
                  <Image
                    src="/twitter.svg"
                    width={26}
                    height={26}
                    alt="image"
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="block">
            <div className="block-85">
              <a href="" className="a-link">
                Work
              </a>
              <a href="" className="a-link">
                Contact
              </a>
              <a href="" className="a-link">
                About Us
              </a>
              <a href="" className="a-link">
                Privacy Policy
              </a>
            </div>

            <div className="block-84">
              <a href="/" className="b-link">
                UNLIMITED SHIT TO DOWNLOAD
              </a>
            </div>
          </div>
          <div className="block right">
            <div className="b-86">
              <a href="/">Titan corp</a>
            </div>

            <div className="b-87">
              <a href="/">LICENSE</a>
              <a href="/">SUPPORT</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
