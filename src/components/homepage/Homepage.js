import React from "react";
import HT1 from "../../images/HT1.png";
import HT2 from "../../images/HT2.png";
import HT3 from "../../images/HT3.png";
import Groupglobe from "../../images/Groupglobe.svg"
import Groupbuilding from "../../images/Groupbuilding.svg"
import Groupclock from "../../images/Groupclock.svg"
import rupeedesktop from "../../images/rupeedesktop.svg"
import rupeemobile from "../../images/rupeemobile.svg"
import "./homepage.css";
import HarnessTechCarousel from "./HarnessTechCarousel";

const Homepage = () => {
  return (
    <div className="home-main">
      <div id="section-1" className="sections">
        {/* <img src={coverpage} alt="" className="coverpage-img"/> */}

        <div id="section1-inner">
          <div id="home-main-heading">
            <p className="broad-heading">
              Investing in trust and commitment
            </p>
            <p className="light-heading">
              Making our customers feel the warmth of Indian roots
            </p>
          </div>
        </div>
      </div>
      <div id="section-2" className="sections">
        <div className="section2-inner">
          <h1 className="subheading-home">Insights</h1>
          <div className="section-2main ">
            <div className="section2-content  ml-auto mr-auto">
              <div
                id="default-carousel"
                class="relative ml-auto mr-auto"
                data-carousel="static"
              >
                {/* <!-- Carousel wrapper --> */}
                <div class="overflow-hidden relative h-56 rounded-lg sm:h-64 xl:h-80 2xl:h-96">
                  {/* <!-- Item 1 --> */}
                  <div
                    class="hidden duration-700 ease-in-out"
                    data-carousel-item
                  >
                    <span class="absolute top-1/2 left-1/2 text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 sm:text-3xl dark:text-gray-800">
                      First Slide
                    </span>
                    <img
                      src="/docs/images/carousel/carousel-1.svg"
                      class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
                      alt="..."
                    />
                  </div>
                  {/* <!-- Item 2 --> */}
                  <div
                    class="hidden duration-700 ease-in-out"
                    data-carousel-item
                  >
                    <img
                      src="/docs/images/carousel/carousel-2.svg"
                      class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
                      alt="..."
                    />
                  </div>
                  {/* <!-- Item 3 --> */}
                  <div
                    class="hidden duration-700 ease-in-out"
                    data-carousel-item
                  >
                    <img
                      src="/docs/images/carousel/carousel-3.svg"
                      class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
                      alt="..."
                    />
                  </div>
                </div>
                {/* <!-- Slider indicators --> */}
                <div class="flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2">
                  <button
                    type="button"
                    class="w-3 h-3 rounded-full"
                    aria-current="false"
                    aria-label="Slide 1"
                    data-carousel-slide-to="0"
                  ></button>
                  <button
                    type="button"
                    class="w-3 h-3 rounded-full"
                    aria-current="false"
                    aria-label="Slide 2"
                    data-carousel-slide-to="1"
                  ></button>
                  <button
                    type="button"
                    class="w-3 h-3 rounded-full"
                    aria-current="false"
                    aria-label="Slide 3"
                    data-carousel-slide-to="2"
                  ></button>
                </div>
                {/* <!-- Slider controls --> */}
                <button
                  type="button"
                  class="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
                  data-carousel-prev
                >
                  <span class="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg
                      class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 19l-7-7 7-7"
                      ></path>
                    </svg>
                    <span class="hidden">Previous</span>
                  </span>
                </button>
                <button
                  type="button"
                  class="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
                  data-carousel-next
                >
                  <span class="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg
                      class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      ></path>
                    </svg>
                    <span class="hidden">Next</span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="section-3" className="sections">
        <div className="section3-inner">
          <div className="section3-image" id="rupee">
            <img src={rupeedesktop} alt="" className="rupeedesktop" />
            <img src={rupeemobile} alt="" className="rupeemobile" />
            

          </div>
          <div className="section3-content">
            <h1 className="subheading3">WealthBees</h1>
            <div className="section3-content-main">
              WealthBees is a leader in providing personalised financial
              services. Based out of Lucknow, it deals in personal investments
              with the commitment of keeping the client first. WealthBees is
              driven by technology but rooted to its ideals of trust and
              integrity. WealthBees believes that everyone in the society should
              be empowered to make their financial decisions in best possible
              way and make their money earn for them.
            </div>
          </div>
        </div>
      </div>
      <div id="mid-section">
        <div className="mid-section-inner">
          <div className="element">
            <div className="element-image">
              <img src={Groupclock} alt="" style={{height:"222px"}}/>

            </div>
            <p className="statistics">30+</p>
            <p className="caption">months of dedicated work</p>
          </div>
          
          <div className="element">
            <div className="element-image">
              <img src={Groupglobe} alt="" style={{height:"222px"}}/>
            </div>
            <p className="statistics">5+</p>
            <p className="caption">counries are being serviced by us</p>
          </div>

          <div className="element">
            <div className="element-image">
              <img src={Groupbuilding} alt="" style={{ height: "222px" }} />

            </div>
            <p className="statistics">100+</p>
            <p className="caption">crores of funds being managed</p>
          </div>
        </div>
      </div>
      <div id="section-4" className="sections">
        <div className="section4-inner">
          <div className="div-top">
            <div id="box4-1" className="subdivsof4">
              <div className="secion4-firstimage">
              <img src={HT1} alt="" id="HT1" /></div>
              <div id="content4-1">
                <h1 id="subheading4-1">
                  Online ATM. - Fast &amp; Secure WealthBees Mobile App
                </h1>
                <hr className="linein4" />
                <p className="aboutapp4">
                  Online ATM on the app allows you to invest or withdraw an
                  amount within 30 minutes of service request. Making you feel
                  secure about the ease of access to your money.
                </p>
              </div>
            </div>

            <div id="box4-2" className="subdivsof4">
              <div id="content4-2">
                <div>
                  <h1 className="subheading4-2 subheading4">Harnessing Technology</h1>
                </div>
                <div className="section4-content-2 section4-content">
                  Using Technology to take informed decisions, to maximise your
                  profits with a personalised touch. Wealthbees App provides you
                  with the comfort and security of bringing your portfolio in
                  your pocket. With real time updates and easy interface you
                  feel your money belings to you.
                </div>
              </div>
            </div>
          </div>

          <div className="div-bottom">
            <div id="box4-3" className="subdivsof4">
              <div className="secion4-secondimage">
                <img src={HT2} alt="" id="HT2" /></div>
              <div id="content4-3">
                <h1 id="subheading4-3">
                  Portfolio in your pocket. WealthBees Mobile App
                </h1>
                <hr className="linein4" id="line-sec" />
                <p className="aboutapp4">
                  With an easy and interactive interface, Get an overview of
                  your whole portfolio with real-time updates. Bringing your
                  family's complete portfolio in your pocket.
                </p>
              </div>
            </div>

            <div id="box4-4" className="subdivsof4">
              <div className="secion4-thirdimage">
                <img src={HT3} alt="" id="HT3" /></div>
              <div id="content4-4">
                <h1 id="subheading4-4">
                  Investing through Research &amp; Perfection.
                </h1>
                <hr className="linein4" id="line-third" />
                <p className="aboutapp4">
                  Investing in the suitable funds, which ensures your profit,
                  with state-of-the-art infographics-based research on
                  Investments. So that you have a perfectly balanced portfolio.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="HarnessTechCarousel">
          <HarnessTechCarousel/>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
