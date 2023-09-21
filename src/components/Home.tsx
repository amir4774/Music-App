import Image from "next/image";
import logo from "../images/Group 25.png";
import Link from "next/link";

const Home = () => {
  return (
    <main>
      <div className="mx-auto w-80 h-auto logo">
        <Image src={logo} alt="Music" className="w-full h-full" priority />
      </div>

      <div className="text-white text-center">
        <h1 className="text-5xl bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent home-page-title">Getting Started!</h1>
        <Link href="/search">
          <button
            type="button"
            className="btn bg-gradient-to-r from-buttonBackgroundFirst to-buttonBackgroundSecond p-5 w-60 text-2xl rounded-3xl mt-10 hover:opacity-90 active:opacity-80"
          >
            Lets Go
          </button>
        </Link>
      </div>
    </main>
  );
};

export default Home;
