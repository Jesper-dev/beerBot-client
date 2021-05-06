import Link from "next/link";
import styles from "./components.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <h1 className={styles.title}>beerBot</h1>
    </footer>
  );
}
