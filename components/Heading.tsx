import "../styles/globals.css";
const Heading = () => {
    return (
        // flex flex-row items-center
        <header className="heading" role="banner">
            {/* mb-4 font-bold tracking-tight text-heading sm:text-xl md:text-3xl lg:text-4xl */}
            {/* className="headingName" */}
            <a href="/"><h1 className="mb-3 font-bold tracking-tight text-heading text-3xl lg:text-4xl pt-[1rem]">Kristen Su</h1></a>
            {/* flex flex-row  */}
            {/* <div className="heading-nav">
                <a href="#projects"><h2>Projects</h2></a>
                <a href="#skills"><h2>Skills</h2></a>
                <a href="#blog"><h2>Blog</h2></a>
            </div> */}
        </header>
    );
};

export default Heading;