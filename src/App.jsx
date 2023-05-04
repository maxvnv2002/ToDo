import React, {useEffect, useState} from "react";
import {store} from "./store/store";
import MyTasksList from "./components/Section/MyTasksList";
import './style/main.scss'
import Index from "./components/Navigation";
import MyButton from "./components/UI/MyButton";
import {Route, Routes} from "react-router-dom";
import Homepage from "./pages/Homepage";
import NewTaskPage from "./pages/NewTaskPage";
import Logo from "./components/UI/Logo";
import {taskLoaded} from "./store/actionTypes";


const App = () => {
    const storageName = 'tasksState';
    const storageTasks = localStorage.getItem(storageName);


    const [storeState, setStoreState] = useState(store.getState());

    useEffect(() => {
        store.subscribe(() => setStoreState(store.getState()))
    }, [])




    return (
        <>
            <Logo/>
            <div className="container">
                <Routes>
                    <Route path='/' element={<Homepage state={storeState}/>} />
                    <Route path='/new' element={<NewTaskPage/>} />
                </Routes>
            </div>
        </>
    );
}

export default App;