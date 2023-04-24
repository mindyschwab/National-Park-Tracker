import { useEffect, useState } from 'react'
import TipSection from "../TipsSection"

function DetailsPage({ parkData }) {

    return (
        <>
            <div>
                <p>{parkData.fullName}</p>
                <img className="w-1/2" src={parkData.images[0].url} alt="park image" />
                <p>{parkData.description}</p>
                <a href={parkData.url}>National Park Service Website</a>

            </div>
            <div className="m-5">
                <TipSection parkId={parkData.id} />
            </div>
        </>
    )

}

export default DetailsPage;