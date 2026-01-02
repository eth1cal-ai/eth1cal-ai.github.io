import Items from './projects.json'
import Project from './Project';
export default function Projects() {
    return (
        <div>
            <h1 className="mb-4 font-bold tracking-tight text-heading md:text-lg lg:text-xl" id="projects">Projects</h1>
            {
                Items.map( item => {
                    return(
                        (item.link) 
                        ? 
                            <a key={item.id} href={ item.link }><Project id={item.id} img={item.imgUrl} title={item.title} description={item.description} alt={item.altText}/></a> 
                        : 
                            <div key={item.id}><Project id={item.id} img={item.imgUrl} title={item.title} description={item.description} alt={item.altText}/></div>
                    );
                })
            }
        </div>
    );
};