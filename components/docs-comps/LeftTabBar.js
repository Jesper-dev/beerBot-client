import BeerList from "../../components/BeerList";
import styles from "../../styles/docs.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";

export default function LeftTabBar() {
  return (
    <>
      <div className={styles.leftTabContainer}>
        <ul>
          <Link href="/docs">
            <li>Welcome</li>
          </Link>
          <Link href="/docs/getstarted">
            <li>Get Started</li>
          </Link>
          <Link href="/docs/list">
            <li>Get a list</li>
          </Link>
          <Link href="/docs/single">
            <li>Get a single beer</li>
          </Link>
        </ul>
      </div>
    </>
  );
}
