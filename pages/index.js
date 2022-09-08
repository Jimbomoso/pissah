import Head from "next/head";
import Layout from "../components/layout";
import styles from "../styles/Home.module.css";


import Image from 'next/image'
import myPic from '../public/toilet.jpg'

export default function Home({sheetdata}) {
  
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
            <div className={styles.flex_container}>
                <h1 className="font-bold text-6xl text-center">Pissah</h1>
                <div className={styles.image_container}>
                  <Image 
                    src={myPic}
                    layout="fill"
                    className={styles.image}
                  />
                </div>
                <div className={styles.frame_container}>
                  <h2 className="font-bold text-center text-xl text-gray-800 mb-5">This weeks punishment:</h2>
                  <p className={styles.p}> {sheetdata} </p>
                  {/* <iframe className={styles.sheet} frameBorder="" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRV43wno5guEm8Jrbn8WcDe4Plhs4FhlDyh8demt05WD6pRlJiwMXNOaUch731-0wuB-gcfiRqx4uGD/pubhtml?gid=1916982839&amp;single=true&amp;widget=false&amp;headers=false&amp;chrome=false&amp;" scrolling="no" overflow="hidden"></iframe> */}
                </div>
            </div>
          </main>
        </div>
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  const req = await fetch('http://localhost:3000/api/sheet');
  const res = await req.json();

  return {
    props: {
      sheetdata: res.data
    }
  }
}
