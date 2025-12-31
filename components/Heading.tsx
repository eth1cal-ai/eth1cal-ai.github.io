import "../styles/globals.css";
const Heading = () => {
    return (
        <div className="flex flex-row items-center">
            <a href="/"><h1 className="mb-4 font-bold tracking-tight text-heading sm:text-xl md:text-3xl lg:text-4xl">Kristen Su</h1></a>
            <div className="flex flex-row ">
                <a href="#projects"><h2>Projects</h2></a>
                <a href="#skills"><h2>Skills</h2></a>
                <a href="#blog"><h2>Blog</h2></a>
            </div>
        </div>
    );
};

export default Heading;