import React from "react";
import logo from "../assets/netflix-logo.png";
import movieBanner from "../assets/banner-2.webp";
import movieLogo from "../assets/movie-logo.webp";
import "./browse.css";
const Browse = () => {
  window.onscroll = () => {
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      document.getElementById("nav").style.backgroundColor = "#000";
    } else {
      document.getElementById("nav").style.backgroundColor = "transparent";
    }
  };
  return (
    <>
      {/* Navbar Section  */}
      <section className="w-full relative bg-[#000]">
        <div className="w-[100%] h-[130vh] absolute bg-gradient-to-b from-[rgba(0,0,0,0.6)] from-4% via-transparent via-88% to-[rgba(0,0,0,0.77)] to-8% blur-md"></div>
        <header className="max-w-[100%] w-[100vw] mx-auto block fixed" id="nav">
          <div className="max-w-[90vw] mx-auto flex flex-wrap py-5 items-center">
            <figure>
              <img src={logo} alt="logo" className="sm:w-[7vw] w-[12vw]" />
            </figure>
            <div className=" text-white ms-5">
              <div>
                <ul className="flex row gap-5 text-[0.95vw]">
                  <li className="font-semibold ">Home</li>
                  <li className="cursor-pointer hover:text-gray-300">
                    TV Shows
                  </li>
                  <li className="cursor-pointer hover:text-gray-300">Movies</li>
                  <li className="cursor-pointer hover:text-gray-300">
                    New & Popular
                  </li>
                  <li className="cursor-pointer hover:text-gray-300">
                    My List
                  </li>
                  <li className="cursor-pointer hover:text-gray-300">
                    Browse by Languages
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </header>
        <div className="w-[100%]">
          <img
            src={movieBanner}
            alt="movie-banner"
            className="object-cover w-[100%]"
          />
        </div>
        <div className="absolute top-[20%] left-[4%] max-w-[90%]">
          <figure>
            <img src={movieLogo} alt="movie-title" className="max-w-[35vw]" />
          </figure>
          <div className="text-white text-[1.2vw] max-w-[45%] mt-4">
            In a futuristic society where an indestructible robot police force
            keeps crime at bay, a lone droid evolves to the next level of
            artificial intelligence.
          </div>
          <div className="mt-4 flex flex-row">
            <button className="bg-[rgba(255,255,255,1)] hover:bg-[rgba(255,255,255,0.8)] flex items-center justify-center w-[8vw] rounded-md py-[0.2rem]">
              <span className="text-[1.7vw] px-2">
                <i className="fa-solid fa-play"></i>
              </span>
              <span className="text-[1.2vw] px-1 font-semibold">Play</span>
            </button>
            <button className="bg-[rgba(109,109,110,0.7)] hover:bg-[rgba(98,98,98,0.6)] text-white ms-3 flex items-center justify-center w-[11vw] rounded-md py-[0.2rem]">
              <span className="text-[1.7vw] px-2">
                <i className="fa-solid fa-circle-exclamation"></i>
              </span>
              <span className="text-[1.2vw] px-1 font-semibold">More Info</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Browse;
