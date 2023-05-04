import * as actions from '../actionTypes'
import {priorityList} from "../../constants/priority";
import {arraySort} from "../functions/arraySort";


const initialState = [
    {
        id: 1,
        title: 'This is ToDo list',
        completed: false,
        priority: 'high',
        date: Date.now(),
        active: false
    },
    {
        id: 2,
        title: 'Just do it',
        completed: false,
        priority: 'medium',
        date: 1,
        active: false
    },
    {
        id: 3,
        title: 'Give love',
        completed: false,
        priority: 'high',
        date: 2,
        active: false
    },
    {
        id: 4,
        title: 'And enjoy ur life',
        completed: false,
        priority: 'low',
        date: 3,
        active: false
    },
    {
        id: 5,
        title: 'Stay calm',
        completed: false,
        priority: 'high',
        date: 4,
        active: false
    },
    {
        id: 6,
        title: 'And motivated',
        completed: false,
        priority: 'medium',
        date: 5,
        active: false
    },
    {
        id: 7,
        title: 'You`re the best',
        completed: false,
        priority: 'high',
        date: 6,
        active: false
    },
    {
        id: 8,
        title: 'And you know it',
        completed: false,
        priority: 'low',
        date: 7,
        active: false
    },
]

export const taskReducer = (state = initialState, action) => {
    const newArray = [...state]
    switch (action.type) {
        case actions.taskUpdated :
            const elementIndex = newArray.findIndex(el => el.id === action.payload.id)
            newArray[elementIndex] = {...newArray[elementIndex], ...action.payload}
            return newArray;

        case actions.taskCreated :
            return [...newArray, action.payload];

        case actions.taskLoaded :
            return [...action.payload]

        case actions.taskSorted :
            const type = action.payload.sortType
            const isAsc = action.payload.isAsc
            return arraySort(type, [...newArray], isAsc)

        default:
            return state;

    }
}