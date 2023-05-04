import {priorityList} from "../../constants/priority";

export function arraySort (type, array, isAsc) {
    const compare = (new Intl.Collator('ru')).compare;
    const resultByAsc = isAsc ? 1 : -1;
    const getExprByType = (type, variable) => {
        if (type === 'priority') {
            return priorityList[variable[type]].order;
        }
        else return variable[type];
    }
    if (type === 'title') {
        return array.sort((a, b) => resultByAsc *  compare(getExprByType(type, a), getExprByType(type, b)));
    }
    return array.sort((a, b) => resultByAsc *  getExprByType(type, a) - getExprByType(type, b));
}