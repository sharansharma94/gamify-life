import Head from "next/head";
import Roadmap from "../component/Roadmap";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head></Head>

      <Roadmap />
      <main className={styles.main}></main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
