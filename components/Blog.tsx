import "../styles/globals.css";
import { getCategorizedArticles } from "@/articles";
const Blog = () => {
    const articles = getCategorizedArticles()
    console.log(articles)
    return(
        <div>
            <h1 className="mb-4 font-bold tracking-tight text-heading md:text-lg lg:text-xl" id="blog">Blog</h1>
            <section className="mx-auto w-11/12 md:w-1/2 mt-20 flex flex-col gap-16 mb-20">
                
            </section>
            <section className="flex flex-col gap-10">

            </section>
        </div>
    );
};

export default Blog;