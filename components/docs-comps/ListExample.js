import styles from "../../styles/docs.module.scss";
import { useState } from "react";

export default function ListExample() {
  const [show, setShow] = useState("axios");
  return (
    <>
      <div className={styles.listExampleContainer}>
        <div className={styles.tabBar}>
          <span onClick={() => setShow("axios")}>Axios</span>
          <span onClick={() => setShow("fetch")}>Fetch</span>
        </div>
        <div className={styles.output}>
          <code>
            {show === "axios"
              ? "axios.get('localhost:5000/api/list')"
              : "fetch('localhost:5000/api/list')"}
          </code>
        </div>
      </div>
    </>
  );
}
