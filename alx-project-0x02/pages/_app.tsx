// pages/_app.tsx
import type { AppProps } from "next/app";
import "../styles/globals.css"; // Import your global styles

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} /> {/* This renders the current page */}
    </>
  );
}

export default MyApp;
