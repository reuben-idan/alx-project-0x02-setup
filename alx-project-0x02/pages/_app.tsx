// pages/_app.tsx
import type { AppProps } from "next/app";
import "../styles/globals.css"; // Import your global styles
import Header from "../components/layout/Header"; // Import the Header component

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header /> {/* Render the Header component */}
      <Component {...pageProps} /> {/* This renders the current page */}
    </>
  );
}

export default MyApp;
