import React, { useEffect, useState } from "react";
import ProjectCard from "./projectCard/ProjectCard";
import Loader from "./UI/loader/Loader";

const Projects = () => {
    const username = 'alexandrmaspanov';
    const [repos, setRepos] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        fetch(`https://api.github.com/users/${username}/repos`)
            .then(response => response.json())
            .then(data => {
                const filtered = data.filter(repo =>
                    repo.topics?.includes("portfolio")
                );
                setRepos(filtered);
            })
            .catch(err => console.error(err))
            .finally(() => setIsLoading(false));
    }, []);

    return (
        <section className="projects">
            <h2>My Projects</h2>
            <div className="projectsGrid">
                {isLoading
                ? <Loader />
                : (
                    repos.length
                        ? repos.map(repo =>
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
                        : <div className="notFound">Projects not found!</div>
                    )
                }
            </div>
        </section>
    );
}

export default Projects;
