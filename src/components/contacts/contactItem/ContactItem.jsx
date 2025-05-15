import React from "react";
import classes from './ContactItem.module.css';

const ContactItem = ({ url, icon: Icon, label}) => {
    return (
        <li>
            <a href={url} target="_blank" rel="noopener noreferrer">
                <Icon className={classes.icon} />
                {label}
            </a>
        </li>
    );
}

export default ContactItem;
