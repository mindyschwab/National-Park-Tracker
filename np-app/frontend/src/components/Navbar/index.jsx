import { Link } from "react-router-dom"

function Navbar() {
    return (
        <nav>
            <ul className='flex text-xl p-2'>
                <Link to="/">
                    <li className="mx-4">National Parks Tracker</li>
                </Link>
                <Link to="/about">
                    <li className="">About</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Navbar