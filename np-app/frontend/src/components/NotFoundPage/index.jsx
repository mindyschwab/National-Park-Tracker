import { Link } from "react-router-dom"
import "./styles.css"

function NotFoundPage() {
    const imageURL = "https://images.unsplash.com/photo-1510133768164-a8f7e4d4e3dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"

    return (
        <>
            <div id="not-found" className="h-screen w-screen bg-[url(${imageURL})">
                <div className="mt-32">
                    <h2 className="text-2xl m-6">Page Not Found</h2>
                    <p> Oops! Looks like you wandered off the trail</p>


                    <Link to="/">
                        <button className="bg-green-700 hover:bg-green-600 text-white font-semibold hover:text-white m-4 py-2 px-3 border border-green-700 hover:border-transparent rounded">
                            Return to Home Page
                        </button>

                    </Link>
                </div>
            </div >

        </>
    )
}

export default NotFoundPage
