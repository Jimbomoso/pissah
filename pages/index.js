import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Pissah</title>
          <meta name="description" content="Pissah" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        
        <main className={styles.main}>
        <h1 className={styles.title}>Pissah</h1>
          <h2 className={styles.description}>This week's punishment:</h2>
          <iframe
            frameBorder="0"
            src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQMODec2Pd5vr7lKJZsUHSHqMj6upRG3v5jCZHJUaCxten2YQyalh-Gef_qB1bgRL2dNALMVOplMeB5/pubhtml?gid=1392528245&amp;single=true&amp;widget=false&amp;headers=false&amp;chrome=false&amp;"
          ></iframe>
        </main>

        <footer className={styles.footer}>
          <h2 className={styles.description}>Links:</h2>
          <ul>
            <li>
              {" "}
              <a href="https://forms.gle/hEWCH8fZkWUGEo1x7">
                Submit punishments{" "}
              </a>{" "}
            </li>
            <li>
              {" "}
              <a href="https://docs.google.com/spreadsheets/d/1HqBUGAbqIflPSKtJ93eNfqBkUkCzmMyVnv0PcwvXNFw/edit?usp=sharing">
                {" "}
                Keepers{" "}
              </a>{" "}
            </li>
          </ul>
        </footer>
      </div>
    </>
  );
}
