import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaTelegramPlane } from 'react-icons/fa';
import classes from './Contacts.module.css';
import ContactItem from "./contactItem/ContactItem";

const Contacts = () => {
    return (
        <section id="contacts" className={classes.contacts}>
            <div className="header">
                <h2>Contact Me</h2>
            </div>
            <ul>
                <ContactItem
                    url="mailto:alexandrmaspanov@gmail.com"
                    icon={FaEnvelope}
                    label="alexandrmaspanov@gmail.com"
                />
                <ContactItem
                    url="https://github.com/alexandrmaspanov"
                    icon={FaGithub}
                    label="GitHub"
                />
                <ContactItem
                    url="https://www.linkedin.com/in/alexandr-maspanov-00378a227/"
                    icon={FaLinkedin}
                    label="LinkedIn"
                />
                <ContactItem
                    url="https://t.me/maspanovsasha"
                    icon={FaTelegramPlane}
                    label="Telegram"
                />
            </ul>
        </section>
    );
}

export default Contacts;
