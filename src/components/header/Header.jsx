import React, { useEffect, useState } from "react";
import classes from './Header.module.css';

const Header = () => {
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll("section");
            let current = "";
            sections.forEach(section => {
                const rect = section.getBoundingClientRect();
                if (rect.top <= 0 && rect.bottom >= 0) {
                    current = section.id;
                }
            });
            setActiveSection(current);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={classes.header}>
            <div className={classes.container}>
                <h1 className={classes.logo}>My Portfolio</h1>
                <nav className={classes.nav}>
                    <a href="#about" className={activeSection === "about" ? classes.active : ""}>About</a>
                    <a href="#projects" className={activeSection === "projects" ? classes.active : ""}>Projects</a>
                    <a href="#contacts" className={activeSection === "contacts" ? classes.active : ""}>Contacts</a>
                </nav>
            </div>
        </header>
    );
}

export default Header;
