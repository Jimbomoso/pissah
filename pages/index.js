import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pissah</title>
        <meta name="description" content="Pissah" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Pissah!
        </h1>

        <h2 className={styles.description}>
          This weeks punishment:
        </h2>

        <h2 className={styles.description}>
          Links:
        </h2>
        <ul>
          <li> <a href="https://forms.gle/hEWCH8fZkWUGEo1x7">Submit punishments </a> </li>
          <li> <a href="https://docs.google.com/spreadsheets/d/1HqBUGAbqIflPSKtJ93eNfqBkUkCzmMyVnv0PcwvXNFw/edit?usp=sharing"> Keepers </a> </li>
        </ul>

        <h3> </h3>

      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}
