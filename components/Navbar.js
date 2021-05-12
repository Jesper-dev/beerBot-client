import styles from "../styles/components.module.scss";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [showCheers, setShowCheers] = useState(false);
  const onClick = () => {
    setShowCheers(!showCheers);
  };
  return (
    <>
      <nav className={styles.navbar}>
        <h1 className={styles.titleNav} onClick={onClick}>
          {showCheers ? "Cheers🍻" : "beerBot🍻"}
        </h1>
        <div className={styles.linkContainer}>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/about">
            <a>About</a>
          </Link>
          <Link href="/docs">
            <a>Docs</a>
          </Link>
        </div>
      </nav>
    </>
  );
}
