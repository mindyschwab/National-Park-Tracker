import { Link } from "react-router-dom";

function Card({ parkData, updateDetailPage }) {
    return (
        <>
            <Link
                to={`/details/${parkData.id}`}
                onClick={() => { updateDetailPage(parkData) }}
            >
                <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 m-4">
                    <img className="w-full" src={parkData.images[0].url} alt="park image" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2"> {parkData.fullName}</div>
                        <p className="text-gray-700 text-base">State: {parkData.states}</p>
                    </div>
                </div>
            </Link>
        </>
    );
}

export default Card;