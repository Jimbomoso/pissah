import Link from "next/link";
// import { EXAMPLE_PATH } from "../lib/constants";

export default function Footer() {
  return (
    <footer className="bg-gray-100">
      <div className="container mx-auto px-6 pt-10 pb-6">
        <h5 className="uppercase mb-6 text-center text-black font-bold">
          Links
        </h5>
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/3 text-center">
            <h5 className="uppercase mb-6 font-bold">Punishments</h5>
            <ul className="mb-4">
              <li className="mt-2">
                <a
                  href="https://forms.gle/Xvj8PnZ9xzcayCf76"
                  className="hover:underline text-gray-600 hover:text-orange-500"
                >
                  Submission Form
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 text-center">
            <h5 className="uppercase mb-6 font-bold">Keepers</h5>
            <ul className="mb-4">
              <li className="mt-2">
                <a
                  href="https://docs.google.com/spreadsheets/d/1HqBUGAbqIflPSKtJ93eNfqBkUkCzmMyVnv0PcwvXNFw/edit?usp=sharing"
                  className="hover:underline text-gray-600 hover:text-orange-500"
                >
                  2021
                </a>
              </li>
              <li className="mt-2">
                <a
                  href="https://docs.google.com/spreadsheets/d/1HqBUGAbqIflPSKtJ93eNfqBkUkCzmMyVnv0PcwvXNFw/edit#gid=2028255686"
                  className="hover:underline text-gray-600 hover:text-orange-500"
                >
                  2020
                </a>
              </li>
              <li className="mt-2">
                <a
                  href="https://docs.google.com/spreadsheets/d/1HqBUGAbqIflPSKtJ93eNfqBkUkCzmMyVnv0PcwvXNFw/edit#gid=1141525253"
                  className="hover:underline text-gray-600 hover:text-orange-500"
                >
                  2019
                </a>
              </li>
              <li className="mt-2">
                <a
                  href="https://docs.google.com/spreadsheets/d/1HqBUGAbqIflPSKtJ93eNfqBkUkCzmMyVnv0PcwvXNFw/edit#gid=1463522756"
                  className="hover:underline text-gray-600 hover:text-orange-500"
                >
                  2018
                </a>
              </li>
              <li className="mt-2">
                <a
                  href="https://docs.google.com/spreadsheets/d/1HqBUGAbqIflPSKtJ93eNfqBkUkCzmMyVnv0PcwvXNFw/edit#gid=77066677"
                  className="hover:underline text-gray-600 hover:text-orange-500"
                >
                  2017
                </a>
              </li>
              <li className="mt-2">
                <a
                  href="https://docs.google.com/spreadsheets/d/1HqBUGAbqIflPSKtJ93eNfqBkUkCzmMyVnv0PcwvXNFw/edit#gid=634347005"
                  className="hover:underline text-gray-600 hover:text-orange-500"
                >
                  2016
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 text-center">
            <h5 className="uppercase mb-6 font-bold">Records</h5>
            <ul className="mb-4">
              <li className="mt-2">
                <Link
                  href="/hallOfFame"
                  className="hover:underline text-gray-600 hover:text-orange-500"
                >
                  Hall of Fame
                </Link>
              </li>
              <li className="mt-2">
                <Link
                  href="/hallOfShame"
                  className="hover:underline text-gray-600 hover:text-orange-500"
                >
                  Hall of Shame
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
