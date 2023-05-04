import React, {useState} from 'react';
import MyButton from "../components/UI/MyButton";
import Navigation from "../components/Navigation";
import ArrowLeft from "../components/UI/ArrowLeft";
import MyInput from "../components/UI/MyInput";
import PriorityPicker from "../components/Section/PriorityPicker";
import {taskTemplate} from "../constants/taskTemplate";
import {getMaxIndex} from "../functions/getMaxIndex";
import {taskCreated} from "../store/actionTypes";
import {store} from "../store/store";

const NewTaskPage = () => {
    const [title, setTitle] = useState('Title')
    const [priority, setPriority] = useState('low')

    const addNewTask = () => {
        const id = getMaxIndex()
        const newTask = {...taskTemplate, id, title, priority}

        store.dispatch({
            type: taskCreated,
            payload: newTask
        })

    }

    return (
        <>
            <Navigation
                title='New note'
                firstChildren={<ArrowLeft/>}
            />
            <div className='newTaskSection'>
                <MyInput value={title}
                         setValue={setTitle}
                />
                <PriorityPicker setPriority={setPriority}
                                activePriority={priority}

                />
            </div>
            <MyButton type='button'
                      innerText='Add'
                      onClick={addNewTask}
                      link='/'
            />
        </>
    );
};

export default NewTaskPage;