import React from 'react';
import classes from "./MyButtonGroup.module.scss";

const ButtonGroup = ({cancelEditHandler, changeTitleHandler}) => {



    return (
        <div className={classes.buttonGroup}>
            <input className={`${classes.button} ${classes.buttonSubmit}`}
                   value='Confirm'
                   type='submit'
                   onClick={changeTitleHandler}
            />
            <input className={`${classes.button} ${classes.buttonCancel}`}
                   value='Cancel'
                   type='button'
                   onClick={cancelEditHandler}
            />
        </div>
    );
};

export default ButtonGroup;