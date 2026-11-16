import Items from './projects.json'
import Project from './Project';
export default function Projects() {
    return (
        <main role="main" aria-labelledby="projects">
            <h1 className="mb-4 font-bold tracking-tight text-heading text-xl lg:text-2xl" id="projects">Projects</h1>
            <div className="all-projects">
                {
                    Items.map( item => {
                        return(
                            <Project img={item.imgUrl} title={item.title} description={item.description} alt={item.altText} link={item.link}/>
                        );
                    })
                }
            </div>
        </main>
    );
};