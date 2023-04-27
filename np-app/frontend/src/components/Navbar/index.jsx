import { Link } from "react-router-dom"
import { useState } from "react";

// resource for responsive navbar using tailwind and react: https://www.creative-tim.com/learning-lab/tailwind-starter-kit/documentation/react/navbars
function Navbar() {
    const [navbarOpen, setNavbarOpen] = useState(false);
    return (
        <>
            <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-green-700 ">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between md:w-auto md:static md:block md:justify-start">
                        <Link to="/">
                            <p className="text-lg font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white">
                                National Park Tracker
                            </p>
                        </Link>

                        <button
                            className="text-white cursor-pointer text-xl leading-none px-3 py-1 uppercase border border-solid border-transparent rounded bg-transparent block md:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        > Menu
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
                                    <p className="px-3 py-2 flex items-center text-md uppercase font-bold leading-snug text-white hover:opacity-75">
                                        <span className="ml-2">My Parks</span>
                                    </p>
                                </li>
                            </Link>
                            <Link to="/about">
                                <li className="nav-item">
                                    <p className="px-3 py-2 flex items-center text-md uppercase font-bold leading-snug text-white hover:opacity-75">
                                        <span className="ml-2">About</span>
                                    </p>
                                </li>
                            </Link>
                            <Link to="/auth/signup">
                                <li className="nav-item">
                                    <p className="px-3 py-2 flex items-center text-md uppercase font-bold leading-snug text-white hover:opacity-75">
                                        <span className="ml-2">Sign Up</span>
                                    </p>
                                </li>
                            </Link>
                            <Link to="/auth/login">
                                <li className="nav-item">
                                    <p className="px-3 py-2 flex items-center text-md uppercase font-bold leading-snug text-white hover:opacity-75">
                                        <span className="ml-2">Log In</span>
                                    </p>
                                </li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar