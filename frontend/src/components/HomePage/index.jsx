function HomePage(props) {
    return (
        <>
            <h1 className="text-center text-2xl pt-8">US National Parks </h1>
            <div className="grid 2xl:grid-cols-3 md:grid-cols-2 gap-2 content-center px-4">
                {props.parkContent}
            </div>
        </>
    );
}

export default HomePage;