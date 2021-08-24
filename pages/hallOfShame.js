import Layout from "../components/layout";
import Link from "next/link";

export default function hallOfShame() {
  return (
    <>
      <Layout>
        <main className="text-center">
          <h1 className="font-bold text-5xl mt-3 mb-3">
             Dressbowl Champions
          </h1>
          <ul>
            <li className="text-black">2011 </li> 
            <li className="text-gray-300 font-bold"> Justin Addison - Team Addison</li>
            <li className="text-black">2012 </li> 
            <li className="text-gray-300 font-bold"> Ron Ross - Steelers Ross</li>
            <li className="text-black">2013 </li> 
            <li className="text-gray-300 font-bold"> Brandon Paxton - Victorious Secret</li>
            <li className="text-black">2014 </li> 
            <li className="text-gray-300 font-bold"> Brandon Paxton - Dirty Sanchezed Him</li>
            <li className="text-black">2015 </li> 
            <li className="text-gray-300 font-bold"> Ron Ross - Yoga Pants</li>
            <li className="text-black">2016 </li> 
            <li className="text-gray-300 font-bold"> Keith Nickerson - Championship Short Bus</li>
            <li className="text-black">2017 </li> 
            <li className="text-gray-300 font-bold"> Drew Robinson - Shit Streak</li>
            <li className="text-black">2018 </li> 
            <li className="text-gray-300 font-bold"> J.C. Morrison - Back2back Bowls</li>
            <li className="text-black">2019 </li> 
            <li className="text-gray-300 font-bold"> Mike Scott - Back Come Season </li>
            <li className="text-black">2020 </li> 
            <li className="text-gray-300 font-bold"> Justin Addison - Salty AF</li>
          </ul>
          <h1 className="font-bold text-5xl mt-3 mb-3">Dressbowl Championships</h1>
          <ul>
            <li className="text-gray-300 font-bold"> Brandon Paxton - 2</li>
            <li className="text-gray-300 font-bold"> Justin Addison - 2</li>
            <li className="text-gray-300 font-bold"> Ron Ross - 2</li>
            <li className="text-gray-300 font-bold"> Keith Nickerson - 1</li>
            <li className="text-gray-300 font-bold"> Mike Scott - 1</li>
            <li className="text-gray-300 font-bold"> Drew Robinson - 1</li>
            <li className="text-gray-300 font-bold"> J.C. Morrison - 1</li>
          </ul>
          <div className="m-5 text-bold">
            <Link className="text-bold" href="/"> Home </Link>
          </div>
        </main>
      </Layout>
    </>
  );
}