import Layout from "../components/layout";
import Link from "next/link";

export default function hallOfFame() {
  return (
    <>
      <Layout>
        <main className="text-center">
          <h1 className="font-bold text-5xl mt-3 mb-3">League Champions</h1>
          <ul>
            <li className="text-black">2011 </li>
            <li className="text-gray-300 font-bold">
              Julian Linero - So Suh Me
            </li>
            <li className="text-black">2012 </li>
            <li className="text-gray-300 font-bold">
              Brandon Paxton - Victorious Secret
            </li>
            <li className="text-black">2013 </li>
            <li className="text-gray-300 font-bold">
              Julian Linero - Baby On The Way
            </li>
            <li className="text-black">2014 </li>
            <li className="text-gray-300 font-bold">
              Joe Del La Hoyo - Slob On My Cobb
            </li>
            <li className="text-black">2015 </li>
            <li className="text-gray-300 font-bold">
              Drew Robinson - Boats and Hoes
            </li>
            <li className="text-black">2016 </li>
            <li className="text-gray-300 font-bold">
              Julian Linero - Chromium Crusher
            </li>
            <li className="text-black">2017 </li>
            <li className="text-gray-300 font-bold">
              J.C. Morrison - Im Gonna Lose
            </li>
            <li className="text-black">2018 </li>
            <li className="text-gray-300 font-bold">
              Drew Robinson - Im Thielen It
            </li>
            <li className="text-black">2019 </li>
            <li className="text-gray-300 font-bold">
              Joe Del La Hoya - No Fun If Mahomes Can't Have None
            </li>
            <li className="text-black">2020 </li>
            <li className="text-gray-300 font-bold">
              Julian Linero - Chromium Crusher
            </li>
          </ul>
          <h1 className="font-bold text-5xl mt-3 mb-3">League Championships</h1>
          <ul>
            <li className="text-gray-300 font-bold"> Julian Linero - 4</li>
            <li className="text-gray-300 font-bold"> Joe Del La Hoya - 2</li>
            <li className="text-gray-300 font-bold"> Drew Robinson - 2</li>
            <li className="text-gray-300 font-bold"> Brandon Paxton - 1</li>
            <li className="text-gray-300 font-bold"> J.C. Morrison - 1</li>
          </ul>

          <div className="m-5 text-bold">
            <Link className="text-bold" href="/">
              Home
            </Link>
          </div>
        </main>
      </Layout>
    </>
  );
}
