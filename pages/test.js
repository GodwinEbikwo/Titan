import React from "react";
import Image from "next/image";

export default function test() {
  return (
    <div>
      <h1>Test screen</h1>
      <Image
        src="https://res.cloudinary.com/dqv9mfbvt/image/upload/v1596882037/ct-page-svg_hbpbbu.svg"
        width={950}
        height={950}
        alt="image"
      />
    </div>
  );
}
