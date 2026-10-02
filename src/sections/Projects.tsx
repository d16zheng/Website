import ProjectCard from "../components/ProjectCard";

function Projects() {
    return (
        <section id="projects">

            <h2>Projects</h2>
            <div className="projects-grid">

                <ProjectCard
                    title="Holistiq"
                    description="Stuff"
                    image="iamges/holistiq.png"
                />
            <ProjectCard
                title="Holistiq"
                    description="Stuff"
                    image="iamges/holistiq.png"
                />
            </div>
        </section>
                
    );
}

export default Projects