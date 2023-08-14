import Navigation from "@/components/navigation/navigation";

import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navigation />
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}
