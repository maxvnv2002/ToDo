import React, {useEffect, useState} from 'react';
import classes from './MyTask.module.scss';
import {store} from "../../../store/store";
import MyButtonGroup from "../MyButtonGroup";
import MyTextZone from "../MyTextZone";
import * as actions from "../../../store/actionTypes";
const Task = ({taskId, initValue}) => {
    const taskIndex = store.getState().findIndex(task => task.id === taskId)
    const initActiveStatus = store.getState()[taskIndex].active

    const [inputValue, setInputValue] = useState(initValue)
    const [isActive, setIsActive] = useState(initActiveStatus)

    useEffect(() => {
        setIsActive(initActiveStatus)
        setInputValue(initValue)
    }, [initActiveStatus])


    const changeTitleHandler = (taskId, newTitle, event) => {
        event.preventDefault()
        store.dispatch({
            type: actions.taskUpdated,
            payload: { id: taskId, title: newTitle, active: false }
        })
    }

    const cancelEditHandler = () => {
        setInputValue(initValue)

        store.dispatch({
            type: actions.taskUpdated,
            payload: { id: taskId, active: false }
        })
    }

    const getCurrentClasses = isActive ? `${classes.form} ${classes.formActive}` : `${classes.form}`

    return (
        <form
            className={getCurrentClasses}
        >
            <MyTextZone
                taskId={taskId}
                taskIndex={taskIndex}
                inputValue={inputValue}
                setInputValue={setInputValue}
                setIsActive={setIsActive}
            />
            {isActive && (
                <MyButtonGroup
                    changeTitleHandler={(event) => changeTitleHandler(taskId, inputValue, event)}
                    cancelEditHandler={cancelEditHandler}
                />
            )}
        </form>
    );
};

export default Task;