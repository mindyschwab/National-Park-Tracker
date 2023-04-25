function HomePage(props) {
    return (
        <div className="grid 2xl:grid-cols-3 md:grid-cols-2 gap-2 content-center">
            {props.parkContent}
        </div>

    );
}

export default HomePage;