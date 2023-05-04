import React, {useState} from 'react';
import classes from './PriorityPicker.module.scss'
import {priorityList} from "../../../constants/priority";

const PriorityPicker = ({ activePriority, setPriority }) => {

    return (
        <div className={classes.priority}>
            <p className={classes.priorityText}>Priority</p>
            <div className={classes.priorityGroup}>
                { Object.keys(priorityList).map(priority => (
                    <div
                        key={priority}
                        style={{background: priorityList[priority].color}}
                        className={`${classes.priorityGroupRadio} ${activePriority === priority ? classes.active : ''}`}

                        onClick={() => setPriority(priority)}
                    >
                    </div>
                )) }
            </div>
        </div>
    );
};

export default PriorityPicker;