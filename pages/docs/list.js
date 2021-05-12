import DocsLayout from "../../components/docs-comps/DocsLayout";
import styles from "../../styles/docs.module.scss";
import ListExample from "../../components/docs-comps/ListExample";

export default function list() {
  return (
    <DocsLayout>
      <div className={styles.listContainer}>
        <h1>List</h1>
        <ListExample />
      </div>
    </DocsLayout>
  );
}
