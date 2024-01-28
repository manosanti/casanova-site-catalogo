import Header from "./components/Header";
import HomeImage from "@/app/imgs/home-banner.webp";
import GetShine from "@/app/imgs/get-shine-banner.webp";
import ChairsImage from "@/app/imgs/chairs-rug-banner.webp";
import FlowersImage from "@/app/imgs/flowers-banner.webp";

import Img from "next/image";
import Link from "next/link";
import TrendingSlider from "./components/TrendingSlider";

export default function Home() {
  return (
    <>
      <Header />
      <div className="mb-4" style={{ backgroundColor: "#F0EFEB" }}>
        <div className="grid grid-cols-2 max-w-7xl mx-auto">
          <div className="my-auto">
            <h3 className="font-bold text-7xl">OFERTAS!</h3>
            <p className="text-slate-800 my-3">
              Incredible deals. Top-of-the-line design for less.
            </p>
            <button className="text-white bg-slate-950 p-3 px-6 rounded-md">
              <Link href="/">Catálogo</Link>
            </button>
          </div>
          <Img src={HomeImage} alt="home-banner" />
        </div>
      </div>
      <div
        className="mb-4 grid grid-cols-2 max-w-7xl mx-auto"
        style={{ backgroundColor: "#FFF1E6" }}
      >
        <div className="my-auto p-10">
          <h3 className="font-bold text-4xl">Time To Get Productive</h3>
          <p>
            The first step in determining your ideal working hours is to figure
            out when your mind and body naturally work best.
          </p>
        </div>
        <Img src={GetShine} alt="home-banner" />
      </div>
      <div className="grid grid-cols-3 gap-5 mx-auto max-w-7xl mb-4">
        <div style={{ backgroundColor: "#E2ECE9" }}>
          <div className="p-8">
            <h4>Let Nature Into Your Living Room</h4>
            <p>
              Choose from a wide variety of plants that add life and style to
              any space.
            </p>
          </div>
          <Img src={ChairsImage} alt="home-banner" />
        </div>
        <div style={{ backgroundColor: "#F5F5F5" }}>
          <div className="p-8">
            <h4>Let Nature Into Your Living Room</h4>
            <p>
              Choose from a wide variety of plants that add life and style to
              any space.
            </p>
          </div>
          <Img src={ChairsImage} alt="home-banner" />
        </div>
        <div style={{ backgroundColor: "#F5F5F5" }}>
          <div className="p-8">
            <h4>Let Nature Into Your Living Room</h4>
            <p>
              Choose from a wide variety of plants that add life and style to
              any space.
            </p>
          </div>
          <Img src={ChairsImage} alt="home-banner" />
        </div>
      </div>
      <div className="my-20 relative">
        <Img
          src={FlowersImage}
          className="z-10 max-h-72 object-cover object-top w-full h-full"
          alt="home-banner"
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center text-white">
          <p className="text-2xl">Texto 1</p>
          <p className="text-lg">Texto 2</p>
          <p className="text-base">Texto 3</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto">
        <div>
          <h2 className="font-bold">To Plant a Garden is To Believe in Tomorrow</h2>
          <p>Our plants are sure to brighten up your home (and your future).</p>
        </div>
        <div>
          <TrendingSlider />
        </div>
      </div>
    </>
  );
}
