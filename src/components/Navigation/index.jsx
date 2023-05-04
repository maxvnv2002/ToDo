import React from 'react';
import classes from './Navigation.module.scss'
const Navigation = ({title, firstChildren, secondChildren}) => {
    return (
        <nav className={classes.nav}>
            { firstChildren ? firstChildren
                : <div className={classes.plug}></div>
            }

            <h2 className={classes.title}>
                {title}
            </h2>

            { secondChildren ? secondChildren
                : <div className={classes.plug}></div>
            }
        </nav>
    );
};

export default Navigation;