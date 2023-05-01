import Card from "../Card"

function MyParksPage({ parkData }) {
    let parkContent = <p className="m-24 text-xl">Loading National Park information... </p>
    let fileredParks = parkData.filter(park => park.designation === "National Park")
    if (parkData.length > 0) {
        parkContent = fileredParks.map((park, i) => <Card key={i} parkData={park} />)
    }

    return (
        <>
            <h2 className="text-2xl p-12">My Parks Page</h2>
            <p className="m-2 text-xl">New Features Coming Soon!</p>
            {parkContent}
        </>
    )
}

export default MyParksPage