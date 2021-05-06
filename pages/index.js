import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [showCheers, setShowCheers] = useState(false);
  const onClickBeer = () => {
    setShowCheers(true);
    console.log("Cheers!");
    setTimeout(() => {
      setShowCheers(false);
    }, 5 * 1000);
  };
  return (
    <div className={styles.container}>
      <h1>Cheers!</h1>
      <div className={styles.infoTextContainer}>
        <p>
          Fancy seeing you here! Welcome to{" "}
          {showCheers ? (
            <span className={styles.cheersText}>Cheers!</span>
          ) : (
            <span onClick={onClickBeer} className={styles.beerBotText}>
              beerBot🍻{" "}
            </span>
          )}
          You can find information about the api and the discord bot under the{" "}
          <span className={styles.docsTag}>
            <Link href="/docs">
              <a>docs</a>
            </Link>
          </span>{" "}
          page. You can find information about the creators under the{" "}
          <span className={styles.aboutTag}>
            <Link href="/about">
              <a>about </a>
            </Link>
          </span>
          page.
        </p>
      </div>
    </div>
  );
}
