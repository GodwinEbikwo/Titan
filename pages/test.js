import React from "react";
import Image from "next/image";

export default function test() {
  return (
    <div className="test">
      <div className="test_c container container--pall">
        <div className="test-img">
          <div className="circle">
            <div className="content">
              <h1>Alex Dawson</h1>
              <span>Frontend Developer</span>
            </div>
          </div>
          <div className="circle topright">
            <div className="tr-content">
              <h1>Sarah Cout</h1>
              <span>Designer</span>
            </div>
          </div>
          <div className="circle leftcenter"></div>
          <div className="circle farRight"></div>
          <div className="circle bottomleft"></div>
        </div>
      </div>
    </div>
  );
}
