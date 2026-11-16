import "../styles/globals.css";
interface ProjectProps {
    // key: string;
    // id: string;
	img: string;
	title: string;
    description: string;
    alt: string;
    link: string;
}

const Project = ({img, title, description, alt, link }: ProjectProps) => {
    return (
        <div className="project">
            <div className="project-img">
                <img src={ img } alt={alt}></img>
            </div>
            <div className="project-desc">
                <div className="project-title">{ title }</div>
                <div>{ description }</div>
                <a href={link}><button className="project-button">Visit the site</button></a>
            </div>
        </div>
    );
};

export default Project;