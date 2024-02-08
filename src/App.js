import "./App.css";
import logo from "./assets/netflix-logo.png";
import tvImg from "./assets/tv.png";
import vid from "./assets/video-tv-in-0819.m4v";
import mobilePic from "./assets/mobile-0819.jpg";
import boxshot from "./assets/boxshot.png";
import downloadGif from "./assets/download-icon.gif";
import devicePileIn from "./assets/device-pile-in.png";
import videoDevice from "./assets/video-devices-in.m4v";
import childrenImg from "./assets/children.png";
import { useState } from "react";
function App() {
  const [activeIndex, setActiveIndex] = useState(null);
  const accArray = [
    {
      question: "What is Netflix?",
      answer:
        "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.\nYou can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!",
    },
    {
      question: "How much does Netflix cost?",
      answer:
        "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.",
    },
    {
      question: "Where can I watch?",
      answer:
        "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.\nYou can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.",
    },
    {
      question: "How do I cancel?",
      answer:
        "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
    },
    {
      question: "What can I watch on Netflix?",
      answer:
        "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
    },
    {
      question: "Is Netflix good for kids?",
      answer:
        "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.\nKids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.",
    },
  ];
  const handleDisplay = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  return (
    <>
      {/* Navigation + Banner Section */}
      <section className="banner w-[100%] h-[100vh] bg-cover bg-center">
        <div className="w-[100%] h-[100vh] bg-[rgba(0,0,0,0.5)]">
          <header className="max-w-[80%] mx-auto">
            <div className="flex flex-wrap justify-between py-5">
              <figure>
                <img
                  src={logo}
                  alt="logo"
                  className="sm:w-[9.25rem] w-[20vw]"
                />
              </figure>
              <div className="flex justify-end text-white">
                <div className="h-[2rem] flex bg-[rgba(0,0,0,0.5)]  md:me-6 relative">
                  <div role="img" className="absolute top-[28%] left-[5%]">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="default-ltr-cache-4z3qvp e1svuwfo1"
                      data-name="Languages"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M10.7668 5.33333L10.5038 5.99715L9.33974 8.9355L8.76866 10.377L7.33333 14H9.10751L9.83505 12.0326H13.4217L14.162 14H16L12.5665 5.33333H10.8278H10.7668ZM10.6186 9.93479L10.3839 10.5632H11.1036H12.8856L11.6348 7.2136L10.6186 9.93479ZM9.52722 4.84224C9.55393 4.77481 9.58574 4.71045 9.62211 4.64954H6.41909V2H4.926V4.64954H0.540802V5.99715H4.31466C3.35062 7.79015 1.75173 9.51463 0 10.4283C0.329184 10.7138 0.811203 11.2391 1.04633 11.5931C2.55118 10.6795 3.90318 9.22912 4.926 7.57316V12.6667H6.41909V7.51606C6.81951 8.15256 7.26748 8.76169 7.7521 9.32292L8.31996 7.88955C7.80191 7.29052 7.34631 6.64699 6.9834 5.99715H9.06968L9.52722 4.84224Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <select
                    name=""
                    id=""
                    className="bg-transparent border border-gray-500 rounded px-7"
                  >
                    <option value="">English</option>
                    <option value="">Hindi</option>
                  </select>
                </div>
                <button className="bg-red-600 hover:bg-red-700 rounded px-3 h-[2rem] duration-150 font-semibold sm:text-[1rem] text-[10px]">
                  Sign In
                </button>
              </div>
            </div>
          </header>
          <div className="max-w-[80%] mx-auto my-[100px] md:my-[170px] text-white">
            <h1 className="text-center text-3xl md:text-5xl font-bold">
              Unlimited movies, TV shows and more
            </h1>
            <h1 className="text-center text-[20px] md:text-[27px] py-5">
              Watch anywhere. Cancel anytime.
            </h1>
            <h1 className="text-center text-[18px] md:text-[24px]">
              Ready to watch? Enter your email to create or restart your
              membership.
            </h1>
            <div className="max-w-[80%] mx-auto flex flex-col md:flex-row justify-center items-center gap-2 py-5">
              <input
                type="text"
                placeholder="Email Address"
                className="bg-[rgba(0,0,0,0.5)] border border-gray-500 rounded font-semibold text-lg py-3 pl-3 w-[100%] md:w-[400px]"
              />
              <button className="flex items-center justify-center text-2xl font-semibold bg-red-600 hover:bg-red-700 rounded duration-150 min-w-[230px] py-[11px]">
                <span>Get Started </span>
                <span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    data-mirrorinrtl="true"
                    class="default-ltr-cache-4z3qvp e1svuwfo1"
                    data-name="ChevronRight"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M15.5859 12L8.29303 19.2928L9.70725 20.7071L17.7072 12.7071C17.8948 12.5195 18.0001 12.2652 18.0001 12C18.0001 11.7347 17.8948 11.4804 17.7072 11.2928L9.70724 3.29285L8.29303 4.70706L15.5859 12Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Enjoy your TV  */}
      <section className="w-[100] bg-[black] border-t-[8px] border-t-[#2f2f2f] sm:py-[50px] py-[50px]">
        <div className="max-w-[80%] mx-auto">
          <div className="grid lg:grid-cols-2 grid-cols-1 items-center md:place-items-center">
            <div className="text-white">
              <h2 className="sm:text-5xl text-4xl font-bold text-center sm:text-start">
                Enjoy on your TV
              </h2>
              <p className="sm:text-2xl text-lg pt-6 text-center sm:text-start">
                Watch on smart TVs, PlayStation, Xbox, Chromecast,
                <br /> Apple TV, Blu-ray players and more.
              </p>
            </div>
            <figure className="relative">
              <video
                className="absolute w-[73%] left-[13%] bottom-[25%] z-[1]"
                autoPlay
                muted
                loop
              >
                <source src={vid} />
              </video>
              <img className="relative z-[2]" src={tvImg} alt="tv" />
            </figure>
          </div>
        </div>
      </section>
      {/* Watch offline  */}
      <section className="w-[100] bg-[black] border-t-[8px] border-t-[#2f2f2f] sm:py-[50px] py-[50px]">
        <div className="max-w-[80%] mx-auto">
          <div className="grid lg:grid-cols-2 grid-cols-1 items-center md:place-items-center">
            <div className="text-white order-1 lg:order-2 sm:order-1">
              <h2 className="sm:text-5xl text-4xl font-bold text-center sm:text-start">
                Download your shows to watch offline
              </h2>
              <p className="sm:text-2xl text-lg pt-6 text-center sm:text-start">
                Save your favourites easily and always have
                <br /> something to watch.
              </p>
            </div>
            <figure className="relative order-2 lg:order-1 sm:order-2">
              <img
                src={mobilePic}
                alt="mobile"
                className="w-[538px] h-[404px]"
              />
              <div className="lg:w-[50%] md:w-[70%] sm:w-[80%] w-[80%]  mx-auto absolute bottom-[5%] left-[15%] lg:left-[19%] md:left-[15%] sm:left-[5%] bg-[black] border-2 rounded-[0.75rem] border-[#808080b3] px-2 py-3 flex flex-row justify-start items-center">
                <span className="w-[60px] h-[72px] mr-4">
                  <img src={boxshot} alt="boxshot" className="object-cover" />
                </span>
                <span className="w-[70%]">
                  <h3 className="text-[16px] text-white font-bold">
                    Stranger Things
                  </h3>
                  <h3 className="text-[14px] text-[#0071eb]">Downloading...</h3>
                </span>
                <span>
                  <img
                    src={downloadGif}
                    alt="download-gif"
                    className="w-[3rem] h-[3rem]"
                  />
                </span>
              </div>
            </figure>
          </div>
        </div>
      </section>
      {/* Watch Everywhere  */}
      <section className="w-[100] bg-[black] border-t-[8px] border-t-[#2f2f2f] sm:py-[50px] py-[50px]">
        <div className="max-w-[80%] mx-auto">
          <div className="grid lg:grid-cols-2 grid-cols-1 items-center md:place-items-center">
            <div className="text-white">
              <h2 className="sm:text-5xl text-4xl font-bold text-center sm:text-start">
                Watch everywhere
              </h2>
              <p className="sm:text-2xl text-lg pt-6 text-center sm:text-start">
                Stream unlimited movies and TV shows on your
                <br /> phone, tablet, laptop, and TV.
              </p>
            </div>
            <figure className="relative">
              <video
                className="absolute w-[60%] left-[20%] bottom-[48%] z-[1]"
                autoPlay
                muted
                loop
              >
                <source src={videoDevice} />
              </video>
              <img className="relative z-[2]" src={devicePileIn} alt="tv" />
            </figure>
          </div>
        </div>
      </section>
      {/* Kids Profile  */}
      <section className="w-[100] bg-[black] border-t-[8px] border-t-[#2f2f2f] sm:py-[50px] py-[50px]">
        <div className="max-w-[80%] mx-auto">
          <div className="grid lg:grid-cols-2 grid-cols-1 items-center md:place-items-center">
            <div className="text-white order-1 lg:order-2">
              <h2 className="sm:text-5xl text-4xl font-bold text-center sm:text-start">
                Create profiles for kids
              </h2>
              <p className="sm:text-2xl text-lg pt-6 text-center sm:text-start">
                Send children on adventures with their favourite
                <br /> characters in a space made just for them—free with
                <br /> your membership.
              </p>
            </div>
            <figure className="relative order-2 lg:order-1">
              <img className="relative z-[2]" src={childrenImg} alt="tv" />
            </figure>
          </div>
        </div>
      </section>
      {/* FAQs  */}
      <section className="w-[100] bg-[black] border-t-[8px] border-t-[#2f2f2f] sm:py-[50px] py-[50px]">
        <div className="max-w-[80%] mx-auto">
          <div>
            <h1 className="text-white text-center md:text-[3.25rem] text-[2rem] font-extrabold py-2">
              Frequently Asked Questions
            </h1>
          </div>
          <div className="accordion-container text-white">
            {accArray.map((item, index) => {
              return (
                <div className="box my-2" key={index}>
                  <h3
                    id="acc-header-1"
                    className={`bg-[rgb(45,45,45)] cursor-pointer p-6 hover:bg-[rgb(58,58,58)] flex flex-row justify-between ${
                      index === activeIndex ? "active" : ""
                    }`}
                    onClick={() => handleDisplay(index)}
                  >
                    <span className="md:text-2xl text-xl">{item.question}</span>
                    <span className="md:text-3xl text-2xl">
                      {index === activeIndex ? (
                        <i className="fa-solid fa-xmark"></i>
                      ) : (
                        <i className="fa-regular fa-plus"></i>
                      )}
                    </span>
                  </h3>
                  {index === activeIndex && (
                    <div
                      id="text-box-1"
                      className="bg-[rgb(45,45,45)] p-6 md:text-2xl text-xl border-t-2 border-t-black"
                    >
                      {item.answer.split("\n").map((line, index) => (
                        <p key={index} className="mb-4">
                          {line}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <div className="text-white pt-8">
            <h1 className="text-center text-[18px] md:text-[24px]">
              Ready to watch? Enter your email to create or restart your
              membership.
            </h1>
            <div className="mx-auto flex flex-col md:flex-row justify-center items-center gap-2 py-5">
              <input
                type="text"
                placeholder="Email Address"
                className="bg-[rgba(0,0,0,0.5)] border border-gray-500 rounded font-semibold text-lg py-3 pl-3 w-[100%] md:w-[400px]"
              />
              <button className="flex items-center justify-center text-2xl font-semibold bg-red-600 hover:bg-red-700 rounded duration-150 min-w-[230px] py-[11px]">
                <span>Get Started </span>
                <span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    data-mirrorinrtl="true"
                    class="default-ltr-cache-4z3qvp e1svuwfo1"
                    data-name="ChevronRight"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M15.5859 12L8.29303 19.2928L9.70725 20.7071L17.7072 12.7071C17.8948 12.5195 18.0001 12.2652 18.0001 12C18.0001 11.7347 17.8948 11.4804 17.7072 11.2928L9.70724 3.29285L8.29303 4.70706L15.5859 12Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Footer  */}
      <section className="w-[100] bg-[black] border-t-[8px] border-t-[#2f2f2f] sm:py-[50px] py-[50px]">
        <div className="max-w-[80%] mx-auto">
          <div className="text-gray-300 font-semibold">
            <span>Questions? Call </span>
            <span>
              <a href="#" className="underline">
                000-800-919-1694
              </a>
            </span>
          </div>
          <div className="text-gray-300 grid md:grid-cols-2 grid-cols-1 underline text-sm font-semibold mt-5 gap-4">
            <div className="grid grid-cols-2">
              <div>
                <a href="#">FAQ</a>
              </div>
              <div>
                <a href="#">Help Centre</a>
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div>
                <a href="#">Account</a>
              </div>
              <div>
                <a href="#">Media Centre</a>
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div>
                <a href="#">Investor Relations</a>
              </div>
              <div>
                <a href="#">Jobs</a>
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div>
                <a href="#">Ways to Watch</a>
              </div>
              <div>
                <a href="#">Terms of Use</a>
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div>
                <a href="#">Privacy</a>
              </div>
              <div>
                <a href="#">Cookie Preferences</a>
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div>
                <a href="#">Corporate Information</a>
              </div>
              <div>
                <a href="#">Contact Us</a>
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div>
                <a href="#">Speed Test</a>
              </div>
              <div>
                <a href="#">Legal Notices</a>
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div>
                <a href="#">Only on Netflix</a>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <div className="h-[2rem] flex bg-[rgba(0,0,0,0.5)]  md:me-6 relative text-white">
              <div role="img" className="absolute top-[28%] left-[1%]">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="default-ltr-cache-4z3qvp e1svuwfo1"
                  data-name="Languages"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.7668 5.33333L10.5038 5.99715L9.33974 8.9355L8.76866 10.377L7.33333 14H9.10751L9.83505 12.0326H13.4217L14.162 14H16L12.5665 5.33333H10.8278H10.7668ZM10.6186 9.93479L10.3839 10.5632H11.1036H12.8856L11.6348 7.2136L10.6186 9.93479ZM9.52722 4.84224C9.55393 4.77481 9.58574 4.71045 9.62211 4.64954H6.41909V2H4.926V4.64954H0.540802V5.99715H4.31466C3.35062 7.79015 1.75173 9.51463 0 10.4283C0.329184 10.7138 0.811203 11.2391 1.04633 11.5931C2.55118 10.6795 3.90318 9.22912 4.926 7.57316V12.6667H6.41909V7.51606C6.81951 8.15256 7.26748 8.76169 7.7521 9.32292L8.31996 7.88955C7.80191 7.29052 7.34631 6.64699 6.9834 5.99715H9.06968L9.52722 4.84224Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <select
                name=""
                id=""
                className="bg-transparent border border-gray-500 rounded px-7"
              >
                <option value="">English</option>
                <option value="">Hindi</option>
              </select>
            </div>
          </div>
          <div className="mt-5 text-gray-300">Netflix India</div>
        </div>
      </section>
    </>
  );
}

export default App;
