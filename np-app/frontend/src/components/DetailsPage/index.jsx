import { getTips } from "../../../utils/backend";
import { useEffect, useState } from 'react'
import TipSection from "../TipsSection"

function DetailsPage({ parkData }) {
    const [tips, setTips] = useState([])

    // Query the database for all tips that pertain to this park
    useEffect(() => {
        getTips(parkData.id)
            .then(tips => setTips(tips))
    }, [])

    return (
        <>
            <div>
                <p>{parkData.fullName}</p>
                <img className="w-1/2" src={parkData.images[0].url} alt="park image" />
                <p>{parkData.description}</p>
                <a href={parkData.url}>National Park Service Website</a>

            </div>
            <div className="m-5">
                <TipSection tips={tips} parkId={parkData.id} updateTips={setTips} />
            </div>
        </>
    )

}

export default DetailsPage;