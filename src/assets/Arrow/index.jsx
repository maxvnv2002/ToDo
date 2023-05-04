import React from 'react';
import classes from './arrow.module.scss'
const Arrow = ({ isActive, isAscending }) => {
    const currentClasses = `
        ${ classes.arrow }
        ${ isActive ? classes.active : ''}
        ${ isActive && isAscending ? classes.asc : '' }
    `

    return (
        <div className={currentClasses}>
            
        </div>
    );
};

export default Arrow;