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
              <iframe width="100%" frameBorder="0" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRV43wno5guEm8Jrbn8WcDe4Plhs4FhlDyh8demt05WD6pRlJiwMXNOaUch731-0wuB-gcfiRqx4uGD/pubhtml?gid=1916982839&amp;single=true&amp;widget=false&amp;headers=false&amp;chrome=false&amp;"></iframe>
            </div>
            <h1 className="font-bold uppercase text-gray-800 mb-2 text-center">
              2022 Draft is August 27th @ 645pm est
            </h1>
            <ul className="font-bold text-center m-5">
              <li> - Julians Boo </li>
              <li> - Muppet </li>
              <li> - Justin </li>
              <li> - Julian </li>
              <li> - Elderly Brandon </li>
              <li> - Jason </li>                                                                   
              <li> - J.C. </li>
              <li> - Kyle </li>
              <li> - Ol man Ross </li>
              <li> - Osvaldo </li>
            </ul>
          </main>
        </div>
      </Layout>
    </>
  );
}
