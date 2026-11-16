import "../styles/globals.css";
const Links = () => {
    return (
        <nav className="links" role="navigation">
            {/* Credits to Flowbite */}
             {/* type="button" className="text-body bg-neutral-primary-soft border border-default hover:bg-neutral-secondary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary-soft shadow-xs font-medium leading-5 rounded-full text-sm px-4 py-2.5 focus:outline-none */}
            <a href="https://linkedin.com/in/kristensu-"><button className="link-button">LinkedIn</button></a>
             {/* type="button" className="text-body bg-neutral-primary-soft border border-default hover:bg-neutral-secondary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary-soft shadow-xs font-medium leading-5 rounded-full text-sm px-4 py-2.5 focus:outline-none" */}
            <a href="https://github.com/eth1cal-ai"><button className="link-button">Github</button></a>
        </nav>
    );
};

export default Links;