import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import TipSection from "../TipsSection"
import { getData } from '../../../utils/api';


function DetailsPage({ parkData, updatePark }) {
    const { id } = useParams()
    const apiKey = import.meta.env.VITE_API_KEY

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
            <div className='p-4'>
                <p className='text-2xl p-4'>{parkData.fullName}</p>
                <div className="grid grid-cols-1 gap-2 content-center m-2">

                    <div className=''>
                        <img className="w-full object-cover p-2" src={parkData.images[0].url} alt="park image" />
                    </div>
                    <div className='p-2'>
                        <p className='leading-relaxed text-left'>{parkData.description}</p>
                        <br />
                        <a href={parkData.url} className='underline hover:text-blue-600'>National Park Service Website</a>

                    </div>
                </div>
                <div className='grid lg:grid-cols-2 md:grid-cols-1 gap-2 content-center m-2 mt-4'>
                    <div className='p-2'>
                        <iframe
                            src={`https://maps.google.com/maps?q=${parkData.fullName}&z=8&output=embed`}
                            width="500"
                            height="450"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                    <div className="p-2 w-4/5">
                        <TipSection parkId={parkData.id} />
                    </div>
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