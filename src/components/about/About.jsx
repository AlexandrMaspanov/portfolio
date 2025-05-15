import React from "react";
import { FaUser } from "react-icons/fa";
import classes from './About.module.css';

const About = () => {
    return (
        <section>
            <div className="header">
                <FaUser className={classes.icon} />
                <h2>About Me</h2>
            </div>
            <p className="text">
                I am a frontend developer who likes to build modern and simple websites.
                I work with React and learn new things every day.
                I try to write clean code and make websites that are easy to use and nice to look at.
            </p>
        </section>
    );
}

export default About;
