import BeerList from "../../components/BeerList";
import styles from "../../styles/docs.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import DocsLayout from "../../components/docs-comps/DocsLayout";

export default function Docs({ beerList }) {
  return (
    <>
      <DocsLayout>
        <h1>Welcome to the docs page</h1>
      </DocsLayout>
    </>
  );
}

// export async function getServerSideProps() {
//   const res = await fetch("http://localhost:5000/api/list");
//   const data = await res.json();

//   return {
//     props: {
//       beerList: data,
//     },
//   };
// }
