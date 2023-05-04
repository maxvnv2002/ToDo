import React from 'react';
import classes from "./MyButton.module.scss";
import {Link} from "react-router-dom";

const MyButton = ({onClick, innerText, type, link}) => {
    return (
        <Link to={link}
              className={`${classes.buttonWrap}`}
        >
            <input className={`${classes.button}`}
                   value={innerText}
                   type={type}
                   onClick={onClick}
            />
        </Link>
    );
};

export default MyButton;