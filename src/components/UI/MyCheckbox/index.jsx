import React from 'react';
import classes from './MyCheckbox.module.scss'
import Check from "../../../assets/Check";
import {store} from "../../../store/store";
import * as actions from "../../../store/actionTypes";


const Index = ({taskId}) => {
    const elementIndex = store
        .getState()
        .findIndex(task => task.id === taskId)

    const isCompleted = store.getState()[elementIndex].completed

    const taskCompleteStatus = (taskId, event) => {
        event.preventDefault()

        store.dispatch({
            type: actions.taskUpdated,
            payload: { id: taskId, completed: !isCompleted, active: false }
        })

    }

    return (
        <label className={`${classes.checkboxLabel}`}
               onClick={(event) => taskCompleteStatus(taskId, event)} >
            <input
                type="checkbox"
                name="complete"
            />
            <span>
                {isCompleted ? (<Check/>) : ''}
            </span>
        </label>

    );
};

export default Index;