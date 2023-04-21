import { Link } from "react-router-dom"

function Navbar() {
    return (
        <nav>
            <ul className='flex text-xl p-2'>
                <Link to="/">
                    <li className="mr-6 text-white hover:text-orange-300">National Parks Tracker</li>
                </Link>
                <Link to="/about">
                    <li className="mr-6 text-white hover:text-orange-300">About</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Navbar