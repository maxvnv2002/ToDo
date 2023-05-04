import React, {useEffect, useState} from 'react';
import {sortNames} from "../../../constants/sortNames";
import * as actions from '../../../store/actionTypes'
import classes from './sort.module.scss'

import Arrow from "../../../assets/Arrow";
import {store} from "../../../store/store";
const Sort = () => {
    const sortKeys = Object.keys(sortNames)
    const [activeSort, setActiveSort] = useState(sortKeys[0])
    const [isAscending, setIsAscending] = useState(true)

    const isActive = (activeSort, type) => activeSort === type
    const getCurrentClassNames = (isActive, classes) => {
        const initClassName = `${classes.sortItem} ${isActive ? classes.active : ''}`;
        return initClassName;
    }

    useEffect(() => {
        store.dispatch({
            type: actions.taskSorted,
            payload: {
                sortType: activeSort,
                isAsc: isAscending
            }
        })
    }, [ activeSort, isAscending ])

    const changeSortHandler = (type) => {
        setActiveSort(type)
        if (activeSort === type) {
            setIsAscending(!isAscending)
        } else {
            setIsAscending(true)
        }
    }



    return (
        <div className={classes.sort}>
            { sortKeys.map(type => (
                <div className={getCurrentClassNames(isActive(activeSort, type), classes)}
                     onClick={() => changeSortHandler(type)}
                >
                    <Arrow
                        isActive={isActive(activeSort, type)}
                        isAscending={isAscending}
                    />
                    <p>{ type }</p>
                </div>
            )) }
        </div>
    );
};

export default Sort;