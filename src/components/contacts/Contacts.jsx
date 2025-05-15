import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaTelegram } from 'react-icons/fa';
import classes from './Contacts.module.css';

const Contacts = () => {
    return (
        <section id="contacts" className={classes.contacts}>
            <div className="header">
                <h2>Contact Me</h2>
            </div>
            <div>
                <ul>
                    <li>
                        <FaEnvelope />
                        <a href="mailto:alexandrmaspanov@gmail.com">alexandrmaspanov@gmail.com</a>
                    </li>
                    <li>
                        <FaGithub />
                        <a href="https://github.com/alexandrmaspanov" target="_blank" rel="noopener noreferrer">GitHub</a>
                    </li>
                    <li>
                        <FaLinkedin />
                        <a href="https://www.linkedin.com/in/alexandr-maspanov-00378a227/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    </li>
                    <li>
                        <FaTelegram />
                        <a href="https://t.me/maspanovsasha" target="_blank" rel="noopener noreferrer">Telegram</a>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Contacts;
