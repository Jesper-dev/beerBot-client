import DocsLayout from "../../components/docs-comps/DocsLayout";
import styles from "../../styles/docs.module.scss";
import ListExample from "../../components/docs-comps/ListExample";

export default function list() {
  return (
    <DocsLayout>
      <div className={styles.listContainer}>
        <h3>To get a list of beers you can simply use: </h3>
        <ListExample />
      </div>
    </DocsLayout>
  );
}
