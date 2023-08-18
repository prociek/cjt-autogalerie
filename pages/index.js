import Head from "next/head";
import Image from "next/image";

import { Inter } from "next/font/google";

import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>CJT AUTOGALERIE</title>
        <meta
          name="description"
          content="Auto verkauf ankauf im Wörth am Rhein"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
      <main className={`${styles.main} ${inter.className}`}>
        <h1>CJT AUTOGALERIE</h1>
        <p>Dein Autoverkäufer</p>
      </main>
    </>
  );
}
