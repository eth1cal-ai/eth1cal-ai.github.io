import "../styles/globals.css";
const Links = () => {
    return (
        <div className="flex flex-row items-center">
            {/* Credits to Flowbite */}
            <a href="https://linkedin.com/in/kristensu-"><button type="button" className="text-body bg-neutral-primary-soft border border-default hover:bg-neutral-secondary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary-soft shadow-xs font-medium leading-5 rounded-full text-sm px-4 py-2.5 focus:outline-none">LinkedIn</button></a>
            <a href="https://github.com/eth1cal-ai"><button type="button" className="text-body bg-neutral-primary-soft border border-default hover:bg-neutral-secondary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary-soft shadow-xs font-medium leading-5 rounded-full text-sm px-4 py-2.5 focus:outline-none">Github</button></a>
        </div>
    );
};

export default Links;