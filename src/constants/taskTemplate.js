import {priorityList} from "./priority";

export const taskTemplate = {
    id: 1,
    title: 'You`re the best',
    completed: false,
    priority: priorityList.high.order,
    date: Date.now(),
    active: false
}