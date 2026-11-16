import "../styles/globals.css";
const AboutMe = () => {
    return (
        <main role="main" aria-labelledby="about-me">
            <h1 className="mb-4 font-bold tracking-tight text-heading text-xl lg:text-2xl" id="about-me">Hi, I'm Kristen, an aspiring software engineer hoping to build socially responsible technology.</h1>
            <ol className="list-none">
                <li>I'm a Computer Science and UX Design student at the University of Michigan. Most recently, I worked as a Software Engineering Intern at Voya Financial and as a Software Engineer at The Michigan Daily.</li>
                {/* <li>Most recently, I worked as a Software Engineering Intern at Voya Financial and as a Software Engineer at The Michigan Daily.</li> */}
            </ol>
        </main>
    );
};

export default AboutMe;