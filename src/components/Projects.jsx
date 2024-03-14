
import React from 'react';
import ProjectCard from './ProjectCard';
import projectsData from '../projects.json';
import { useState } from 'react';



export const Projects = () => {
    const [projects, setProjects] = useState(projectsData);

    return (

        <section className="projects-section flex-row space-y-10 mb-20 pb-20 ">
            <div className="text-[48px] text-titlegray dark:text-darktitlegray font-semibold">
                <h1>Projects</h1>
            </div>
            <div className="projects-container grid grid-cols-3 gap-20">
                {projects.map((project) => (
                    <ProjectCard
                        key={project.name}
                        image={project.image}
                        name={project.name}
                        description={project.description}
                        link1={project.link1}
                        link2={project.link2}
                    />
                ))}
            </div>
        </section>
    )
}

export default Projects;




