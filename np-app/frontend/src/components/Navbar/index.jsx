import { Link } from "react-router-dom"
import { useState } from "react";
// import { useRef } from "react";
// import { Transition } from "@headlessui/react";



// resource for responsive navbar using tailwind and react: https://www.creative-tim.com/learning-lab/tailwind-starter-kit/documentation/react/navbars
function Navbar() {
    // const [isOpen, setIsOpen] = useState(false);
    // const ref = useRef()
    const [navbarOpen, setNavbarOpen] = useState(false);
    return (
        <>
            <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-green-700 mb-3">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between md:w-auto md:static md:block md:justify-start">
                        <Link to="/">
                            <p className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white">
                                National Park Tracker
                            </p>
                        </Link>

                        <button
                            className="text-white cursor-pointer text-xl leading-none px-3 py-1 uppercase border border-solid border-transparent rounded bg-transparent block md:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        > Menu
                            {/* <i className="fa fa-bars"></i> */}
                        </button>
                    </div>
                    <div
                        className={
                            "md:flex flex-grow items-center" +
                            (navbarOpen ? " flex" : " hidden")
                        }
                        id="example-navbar-danger"
                    >
                        <ul className="flex flex-col md:flex-row list-none md:ml-auto">
                            <Link to="/my-parks">
                                <li className="nav-item">
                                    <p className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                                        <span className="ml-2">My Parks</span>
                                    </p>
                                </li>
                            </Link>
                            <Link to="/about">
                                <li className="nav-item">
                                    <p className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                                        <span className="ml-2">About</span>
                                    </p>
                                </li>
                            </Link>
                            <li className="nav-item">
                                <a
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                    href="#"
                                >
                                    <span className="ml-2">Log In</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar