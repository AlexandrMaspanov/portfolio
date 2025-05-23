import React from "react";
import classes from './Loader.module.css';

const Loader = () => {
    return (
        <div className={classes.loaderContainer}>
            <div className={classes.spinner}></div>
        </div>
    );
}

export default Loader;
