import {store} from "../store/store";

export const getMaxIndex = () => {
    const state = store.getState()

    const maxIndex = state.reduce((acc, curr, _, array) => {
        return acc > curr.id ? acc : curr.id
    }, state[0].id)
    return maxIndex + 1
}

