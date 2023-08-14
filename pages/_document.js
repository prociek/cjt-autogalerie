import { Html, Head, Main, NextScript } from "next/document";

import Image from "next/image";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <div
          style={{
            position: "fixed",
            width: "100vw",
            height: "100vh",
            zIndex: -1,
          }}
        >
          <Image
            src="/images/car.jpg"
            alt="bmw"
            objectFit="cover"
            layout="fill"
          />
        </div>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
