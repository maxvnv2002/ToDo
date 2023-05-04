import React from 'react';
import classes from './MyInput.module.scss'

const MyInput = ({ value, setValue }) => {
    return (
        <label className={classes.wrapper}>
            Name
            <input
                className={classes.wrapperInput}
                onChange={(event) => setValue(event.target.value)}
                value={value}
                type="text"
            />
        </label>
    );
};

export default MyInput;