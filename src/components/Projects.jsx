
import React from 'react';
import ProjectCard from './ProjectCard';
import projectsData from '../data/projects.json';
import { useState, useContext } from 'react';

import LanguageContext from '../hooks/LanguageContext';

export const Projects = () => {
    const [projects, setProjects] = useState(projectsData);

    const { translations } = useContext(LanguageContext);


    useEffect(() => {
        setProjects(projectsData);
    }, []);


    return (

        <section className="projects-section flex-row space-y-10 mb-20 pb-20 ">
            <div className="text-[48px] text-titlegray dark:text-darktitlegray font-semibold">
                <h1>{translations.projects}</h1>
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




