interface ProjectProps {
    // key: string;
    id: string;
	img: string;
	title: string;
    description: string;
    alt: string;
}

const Project = ({id, img, title, description, alt }: ProjectProps) => {
    return (
        <div className="flex flex-row" id={id}>
            <div><img src={ img } alt={alt}></img></div>
            <div className="flex flex-col">
                <div>{ title }</div>
                <div>{ description }</div>
            </div>
        </div>
    );
};

export default Project;