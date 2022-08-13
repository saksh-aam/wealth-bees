import React, {  useState } from "react";
import { Transition } from "@headlessui/react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import navlogo from "../../images/navlogo.svg"
function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=" w-full z-50 shadow-xl" id="main-navbar">
      <nav className="py-3">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between ">
            <div className="w-full flex items-center justify-between">
              <div className="flex flex-row items-center">
                <div className="">
                  <Link to="/" className="navbar-brand">
                    <img src={navlogo} alt=""/>
                  </Link>
                </div>
                <div className="hidden md:block pl-8">
                  <div className="flex items-baseline space-x-4 lg:space-x-8 text-[10px] lg:text-[14px]">
                    <Link
                      to="/our-capabilities"
                      className="nav-link nav-link-ltr "
                    >
                      Capabilites
                    </Link>
                    <Link to="/our-firm" className="nav-link nav-link-ltr ">
                      Our Firm
                    </Link>

                    <Link to="/people" className="nav-link nav-link-ltr">
                      People
                    </Link>

                    <Link
                      to="/investors"
                      className="nav-link nav-link-ltr "
                    >
                      Investors
                    </Link>
                    <Link
                      to="/contact-us"
                      className="nav-link nav-link-ltr "
                    >
                      Contact US
                    </Link>
                  </div>
                </div>
              </div>
              <div>
                <Link
                  to=""
                  href="/"
                  target="_blank"
                  rel="noreferrer"
                  type="submit"
                  className="text-black border-2 hover:bg-white border-customYellow hover:text-black font-semibold rounded-full m-2 py-1 px-3 text-xs sm:text-sm transition duration-150 ease-in-out"
                >
                  Login
                </Link>
              </div>
            </div>
            <div className="mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover: focus:outline-none"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {() => (
            <div
              className="md:hidden backdrop-blur bg-cyan-400 bg-opacity-20 absolute z-50 w-full"
              id="mobile-menu"
            >
              <div className=" px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link
                  to="/our-capabilities"
                  className="font-Inter font-bold block px-3 py-2 rounded-md text-base"
                >
                  Capabilities
                </Link>

                <Link
                  to="/our-firm"
                  className="font-Montserrat hover: block px-3 py-2 rounded-md text-base font-bold"
                >
                  Our Firm
                </Link>

                <Link
                  to="/people"
                  className="font-Montserrat font-bold hover: block px-3 py-2 rounded-md text-base "
                >
                  People
                </Link>

                <Link
                  to="/investors"
                  className="font-Montserrat font-bold   hover: block px-3 py-2 rounded-md text-base "
                >
                  Investors
                </Link>
                <Link
                  to="/contact-us"
                  className="font-Montserrat font-bold   hover: block px-3 py-2 rounded-md text-base "
                >
                  Contact Us 
                </Link>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default NavBar;
