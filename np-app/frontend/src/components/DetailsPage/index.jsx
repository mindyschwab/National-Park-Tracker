function DetailsPage({ parkData }) {
    console.log(parkData)
    return (
        <>
            <p>{parkData.fullName}</p>
            <img className="w-1/2" src={parkData.images[0].url} alt="park image" />
        </>
    )

}

export default DetailsPage;