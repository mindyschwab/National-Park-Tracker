import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import TipSection from "../TipsSection"
import { getData } from '../../../utils/api';


function DetailsPage({ parkData, updatePark }) {
    const { id } = useParams()
    console.log(id)
    const apiKey = import.meta.env.VITE_API_KEY
    console.log(parkData)
    console.log(`https://developer.nps.gov/api/v1/parks?&api_key=${apiKey}&id=${id}`)

    // On component mount check if parkkData is defined. If not defined, use the URL to query the API
    useEffect(() => {
        if (!parkData) {
            getData(`https://developer.nps.gov/api/v1/parks?&api_key=${apiKey}&id=${id}`)
                .then(res => updatePark(res.data))
        }
    }, [])

    let page = <p>Loading National Park information... </p>
    if (parkData) {
        page =
            <div>
                <div>
                    <p>{parkData.fullName}</p>
                    <img className="w-1/2" src={parkData.images[0].url} alt="park image" />
                    <p>{parkData.description}</p>
                    <a href={parkData.url}>National Park Service Website</a>

                </div>
                <div className="m-5">
                    <TipSection parkId={parkData.id} />
                </div>

                <div>
                    <iframe
                        src={`https://maps.google.com/maps?q=${parkData.fullName}&z=8&output=embed`}
                        width="600"
                        height="450"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </div>

    }

    return (
        <>
            {page}
        </>
    )

}

export default DetailsPage;