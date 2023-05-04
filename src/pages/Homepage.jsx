import React from 'react';
import MyTasksList from "../components/Section/MyTasksList";
import MyButton from "../components/UI/MyButton";
import Navigation from "../components/Navigation";
import Sort from "../components/Section/Sort";

const Homepage = ({state}) => {
    return (
        <>
            <Navigation
                        title='Note'
            />
            <Sort/>
            <MyTasksList state={state}/>
            <MyButton
                type='button'
                innerText='New'
                link='/new'
            />
        </>
    );
};

export default Homepage;