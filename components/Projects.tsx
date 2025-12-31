import Items from './projects.json'
const Projects = () => {
    return (
        <div>
            <h1 className="mb-4 font-bold tracking-tight text-heading md:text-lg lg:text-xl" id="projects">Projects</h1>
            {
                Items.map( item => {
                    return(
                        <a href={ item.link }>
                            <div className="flex flex-row">
                                <div><img src={ item.imgUrl }></img></div>
                                <div className="flex flex-col">
                                    <div>{ item.title }</div>
                                    <div>{ item.description }</div>
                                </div>
                            </div>
                        </a>
                    )
                })
            }
        </div>
    );
};

export default Projects;