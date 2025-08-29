import ProjectCard from '../../components/ProjectCard/ProjectCard';
import data from '../../data/projects.json';
import './_projects.scss';

export default function Projects() {
    return(
        <section className="projects-section">
            <h1>🛠️ Projets</h1>
            <div className="context">
                {data.map((project, i) => {
                    return <ProjectCard project={project}/>;
                })}
            </div>
        </section>
    );
};