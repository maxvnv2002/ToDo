import React from 'react';
import classes from "./Logo.module.scss";

const Logo = () => {
    return (
        <header className={classes.header}>
            <h1 className={classes.title}>Tasks App</h1>
        </header>
    );
};

export default Logo;