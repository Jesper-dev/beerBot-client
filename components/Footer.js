import Link from "next/link";
import styles from "../styles/components.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.text}>created by - Jesper Pettersson</p>
    </footer>
  );
}
