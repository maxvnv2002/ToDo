import React from 'react';
import classes from "./MyTextZone.module.scss";
import {priorityList} from "../../../constants/priority";
import MyCheckbox from "../../UI/MyCheckbox";
import {store} from "../../../store/store";
import * as actions from "../../../store/actionTypes";
const TextZone = ({taskId, taskIndex, inputValue, setInputValue, setIsActive}) => {
    const taskPriority = store.getState()[taskIndex].priority



    const taskToActive = (taskId) => {
        setIsActive(true)

        store.dispatch({
            type: actions.taskUpdated,
            payload: { id: taskId, active: true }
        })
    }

    const taskToInactive = (taskId) => {
        const activeIndex = store.getState().findIndex(item => item.active === true && item.id !== taskId)

        if (activeIndex >= 0) {
            const activeElementId = store.getState()[activeIndex].id
            store.dispatch({
                type: actions.taskUpdated,
                payload: { id: activeElementId, active: false }
            })
        }
    }

    const taskClickHandler = (event) => {
        event.preventDefault()
        taskToInactive(taskId)
        taskToActive(taskId)
    }


    return (
        <div className={classes.task}>
            <input type="text"
                   className={classes.input}
                   value={inputValue}
                   onClick={(event) => taskClickHandler(event)}
                   onChange={(event) => setInputValue(event.target.value)}
            />
            <div className={`${classes.priority}`} style={{background: priorityList[taskPriority].color}}></div>
            <MyCheckbox taskId={taskId} taskToInactive={taskToInactive}/>
        </div>
    );
};

export default TextZone;