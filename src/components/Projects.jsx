import React, { useEffect, useState } from "react";
import ProjectCard from "./projectCard/ProjectCard";

const Projects = () => {
    const username = 'alexandrmaspanov';
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        fetch(`https://api.github.com/users/${username}/repos`)
            .then(response => response.json())
            .then(data => {
                const filtered = data.filter(repo =>
                    repo.topics?.includes("portfolio")
                );
                setRepos(filtered);
            })
            .catch(err => console.error(err));
    }, []);

    return (
        <section className="projects">
            <h2>My Projects</h2>
            <div className="projectsGrid">
                {
                    repos.map(repo =>
                        <ProjectCard
                            key={repo.id}
                            name={repo.name}
                            fullName={repo.full_name}
                            description={repo.description}
                            topics={repo.topics}
                            link={repo.html_url}
                            homepage={repo.homepage}
                        />
                    )
                }
            </div>
        </section>
    );
}

export default Projects;
