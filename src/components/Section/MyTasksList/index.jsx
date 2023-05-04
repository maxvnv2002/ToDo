import React from 'react';
import MyTask from "../MyTask";
import classes from './MyTasksList.module.scss'
const MyTasksList = ({state}) => {
    console.log(state)
    return (
        <div>
            <div>
                <h3 className={classes.title}>Backlogs</h3>
                <ul className={classes.list}>
                    {state.map(el =>
                        !el.completed && (
                            <li key={el.id}
                                className={classes.task}>
                                <MyTask
                                    taskId={el.id}
                                    initValue={el.title}
                                />
                            </li>
                        ))}
                </ul>
            </div>
            <div>
                <h3 className={classes.title}>Completed tasks</h3>
                <ul className={classes.list}>
                    {state.map(el =>
                        el.completed && (
                            <li key={el.id}
                                className={classes.task}>
                                <MyTask
                                    taskId={el.id}
                                    initValue={el.title}
                                />
                            </li>
                        ))}
                </ul>
            </div>
        </div>
    );
};

export default MyTasksList;