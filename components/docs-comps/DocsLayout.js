import LeftTabBar from "./LeftTabBar";
import styles from "../../styles/docs.module.scss";
import Head from "next/head";

export default function DocsLayout({ children }) {
  return (
    <>
      <Head>
        <title>Docs🍻</title>
      </Head>
      <div className={styles.docsContainer}>
        <LeftTabBar />
        {children}
      </div>
    </>
  );
}
