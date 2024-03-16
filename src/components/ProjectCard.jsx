import React, { useContext } from 'react';
import LanguageContext from '../hooks/LanguageContext';

export const ProjectCard = ({ image, name, description, link1, link2 }) => {

    const { translations } = useContext(LanguageContext);


    return (


        <div>
            <img src={image} className="rounded mb-3" />
            <p className="text-purple  dark:text-darkpurple text-[30px] mb-5"> {name}</p>
            <p className="text-gray  dark:text-darkgray text-[14px] mb-4">{description}</p>
            <div className="projects-links flex mb-4">
                <a href="https://react.dev/" target="_blank" rel="noopener noreferrer" className="purple-button-mini mr-3">react </a>
                <a href="https://react-redux.js.org/" target="_blank" rel="noopener noreferrer" className="purple-button-mini mr-3 "> redux</a>
                <a href="https://axios-http.com/" target="_blank" rel="noopener noreferrer" className="purple-button-mini mr-3 ">axios</a>
            </div>
            <div className="flex justify-between">
                <a href={link2} target="_blank" className="text-purple dark:text-darkpurple text-[16px] underline">Github</a>
                <a href={link1} target="_blank" className="text-purple dark:text-darkpurple text-[16px] underline">{translations.website}</a>
            </div>
        </div>


    );
}

export default ProjectCard;