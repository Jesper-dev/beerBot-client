import styles from "./components.module.scss";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav className={styles.navbar}>
        <h1 className={styles.titleNav}>beerBot</h1>
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
          <Link href="/api-info">
            <a>Api</a>
          </Link>
        </div>
      </nav>
    </>
  );
}
