import React from "react";
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import * as techIcons from 'react-icons/fa';
import { SiTypescript } from "react-icons/si";
import classes from './ProjectCard.module.css';

const ProjectCard = ({ name, fullName, description, topics, link, homepage }) => {
    return (
        <div className={classes.projectCard}>
            <img
                src={`https://opengraph.githubassets.com/1/${fullName}`}
                alt={name}
                onError={(e) => { e.target.style.display = 'none' }}
            />
            <h3>{name}</h3>
            <p>{description}</p>
            <div className={classes.tags}>
                {topics.filter(topic => topic !== 'portfolio').map(topic => (
                    <span key={topic} className={classes.tag}>{getIcon(topic)}{topic}</span>
                ))}
            </div>
            <div className={classes.buttons}>
                <a href={link} target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                    View Project
                </a>
                {homepage && (
                    <a href={homepage} target="_blank" rel="noopener noreferrer">
                        <FaExternalLinkAlt />
                        Live Demo
                    </a>
                )}
            </div>
        </div>
    );
}

function getIcon(topic) {
    const map = {
        react: <techIcons.FaReact color="#61DBFB" />,
        javascript: <techIcons.FaJs color="#F0DB4F" />,
        typescript: <SiTypescript color="#007acc" />,
        html: <techIcons.FaHtml5 color="#e34c26" />,
        css: <techIcons.FaCss3Alt color="#264de4" />,
        nodejs: <techIcons.FaNodeJs color="#3C873A" />,
        python: <techIcons.FaPython color="#306998" />,
    };
    return map[topic.toLowerCase()] || null;
}

export default ProjectCard;
