import React, { useEffect, useState } from "react";
import logo from "../assets/netflix-logo.png";
import movieBanner from "../assets/banner-2.webp";
import movieLogo from "../assets/movie-logo.webp";
import userIcon from "../assets/user.png";
import "./browse.css";
const Browse = () => {
  const [dropdown, setDropdown] = useState(false);
  const [movies, setMovies] = useState([]);
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
  const API = `https://www.omdbapi.com/?i=tt3896198&apikey=9a299fd9`;
  const showMovie = async (url) => {
    try {
      const response = await fetch(`${API}&s=avengers&page=2`);
      const data = await response.json();
      // console.log(data);
      setMovies(data.Search);
      console.log(movies);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    showMovie(`${API}&s=avengers&page=2`);
  }, []);
  return (
    <>
      {/* Navbar Section  */}
      <section className="w-full max-h-[90vh] relative bg-[#000] z-0">
        <div className="w-[100%] h-[100vh] absolute bg-gradient-to-b from-[rgba(0,0,0,0.6)] from-4% via-transparent blur-md"></div>
        <header
          className="max-w-[100%] w-[100vw] mx-auto block fixed z-10"
          id="nav"
        >
          <div className="max-w-[90vw] mx-auto flex flex-wrap py-5 items-center">
            <figure>
              <img src={logo} alt="logo" className="sm:w-[7vw] w-[12vw]" />
            </figure>
            <div className=" text-white ms-5 flex flex-row justify-between grow items-center">
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
              <div>
                <ul className="flex row items-center">
                  <li className="cursor-pointer text-[1.5vw] mx-2">
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </li>
                  <li className="cursor-pointer mx-2 text-[0.95vw] font-semibold">
                    Children
                  </li>
                  <li className="cursor-pointer text-[1.3vw] mx-2">
                    <i className="fa-regular fa-bell"></i>
                  </li>
                  <li
                    className="ms-2 flex flex-row items-center cursor-pointer"
                    onMouseEnter={() => setDropdown(true)}
                    onMouseLeave={() => setDropdown(false)}
                  >
                    <span>
                      <img
                        src={userIcon}
                        alt="user-icon"
                        className="rounded-sm max-w-[2vw]"
                      />
                    </span>
                    <span className="text-[0.8vw] ms-2">
                      {dropdown ? (
                        <i className="fa-solid fa-caret-up"></i>
                      ) : (
                        <i className="fa-solid fa-caret-down"></i>
                      )}
                    </span>
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
            className="object-cover w-[100%] max-h-[90vh]"
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
      {/* Trending Now  */}
      <section className="max-w-[100%] bg-[#000] py-[5vh]">
        <div className="max-w-[90%] mx-auto mt-5">
          <div className="text-gray-100 font-bold text-[1.5vw]">
            Trending Now
          </div>
          <div className="max-w-[100%] w-[100vw] my-4">
            <div className="flex flex-row overflow-x-scroll crousel">
              {movies.map((movie, index) => {
                return (
                  <div
                    className="w-[16vw] h-[8vw] cursor-pointer mr-2 shrink-0"
                    key={index}
                  >
                    <img
                      src={movie.Poster}
                      className="object-cover rounded-md w-[100%] h-[100%]"
                      alt="..."
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      {/* New Releases */}
      <section className="max-w-[100%] bg-[#000] py-[5vh]">
        <div className="max-w-[90%] mx-auto mt-5">
          <div className="text-gray-100 font-bold text-[1.5vw]">
            New Releases
          </div>
          <div className="max-w-[100%] w-[100vw] my-4">
            <div className="flex flex-row overflow-x-scroll crousel">
              {movies.map((movie, index) => {
                return (
                  <div
                    className="w-[16vw] h-[8vw] cursor-pointer mr-2 shrink-0"
                    key={index}
                  >
                    <img
                      src={movie.Poster}
                      className="object-cover rounded-md w-[100%] h-[100%]"
                      alt="..."
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      {/* Footer  */}
      <section className="max-w-[100%] bg-[#000] py-[8vh]">
        <div className="max-w-[72%] mx-auto">
          <div className="text-[1.5rem]">
            <span className="text-white mx-4">
              <i className="fa-brands fa-facebook-f"></i>
            </span>
            <span className="text-white mx-4">
              <i className="fa-brands fa-instagram"></i>
            </span>
            <span className="text-white mx-4">
              <i className="fa-brands fa-twitter"></i>
            </span>
            <span className="text-white mx-4">
              <i className="fa-brands fa-youtube"></i>
            </span>
          </div>
        </div>
        <div className="max-w-[72%] mx-auto text-gray-400 grid md:grid-cols-2 grid-cols-1 text-[0.8rem] mt-5 gap-4">
          <div className="grid grid-cols-2">
            <div>
              <a href="#" className="hover:underline">
                Audio Description
              </a>
            </div>
            <div>
              <a href="#" className="hover:underline">
                Help Centre
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div>
              <a href="#" className="hover:underline">
                Gift Cards
              </a>
            </div>
            <div>
              <a href="#" className="hover:underline">
                Media Centre
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div>
              <a href="#" className="hover:underline">
                Investor Relations
              </a>
            </div>
            <div>
              <a href="#" className="hover:underline">
                Jobs
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div>
              <a href="#" className="hover:underline">
                Terms of Use
              </a>
            </div>
            <div>
              <a href="#" className="hover:underline">
                Privacy
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div>
              <a href="#" className="hover:underline">
                Legal Notices
              </a>
            </div>
            <div>
              <a href="#" className="hover:underline">
                Cookie Preferences
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div>
              <a href="#" className="hover:underline">
                Corporate Information
              </a>
            </div>
            <div>
              <a href="#" className="hover:underline">
                Contact Us
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-[72%] mx-auto pt-[2rem]">
          <div className="">
            <button className="text-[0.8rem] text-gray-400 bg-transparent border border-gray-400 py-[0.5rem] w-[6.5rem] hover:text-white hover:font-semibold">
              Service Code
            </button>
          </div>
          <div className="text-gray-400 text-[0.7rem] mt-4">
            <span>&copy; 1997-2024 Netflix, Inc.</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Browse;
