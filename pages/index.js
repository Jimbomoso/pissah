import Head from "next/head";
import Layout from "../components/layout";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Layout>
        <Head>
          <title>Pissah</title>
          <meta name="description" content="Pissah" />
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1"
          ></meta>
        </Head>
        <div className={styles.container}>
          <main className={styles.main}>
            <div className="hero-image">
              <h1 className="font-bold text-6xl text-center">Pissah</h1>

              <h2 className="font-bold text-center text-xl text-gray-800 mb-5">This weeks punishment:</h2>
              {/* <iframe
                width="100%"
                frameBorder="0"
                src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQMODec2Pd5vr7lKJZsUHSHqMj6upRG3v5jCZHJUaCxten2YQyalh-Gef_qB1bgRL2dNALMVOplMeB5/pubhtml?gid=1392528245&amp;single=true&amp;widget=false&amp;headers=false&amp;chrome=false&amp;"
              ></iframe> */}
              
            </div>
            <h1 className="font-bold uppercase text-gray-800 mb-2 text-center">
              2022 Draft is August 27th @ 645pm est
            </h1>
            <ul className="font-bold text-center m-5">
              <li>1th - Julians Boo </li>
              <li>2nd - Muppet </li>
              <li>3rd - Justin </li>
              <li>4th - Julian </li>
              <li>5th - Elderly Brandon </li>
              <li>6th - Jason </li>                                                                   
              <li>7th - J.C. </li>
              <li>8th - Kyle </li>
              <li>9th - Ol man Ross </li>
              <li>10th - Osvaldo </li>
            </ul>
          </main>
        </div>
      </Layout>
    </>
  );
}
