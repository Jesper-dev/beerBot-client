import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta name="author" content="Jesper Pettersson" />
        <meta name="keywords" content="Express, NextJS, beerBot, discord bot" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Beer Bot🍻</title>
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
