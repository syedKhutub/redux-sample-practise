import {
    INCREMENT,
    DECREMENT,
    ADD
} from './actionType'

export const increment = () => {
    return {
        type : INCREMENT,
    };
}
export const decrement = () => {
    return {
        type: DECREMENT,
    }
}

export const add = (val) => {
    debugger;
    return {
        type : ADD,
        payload : {
            value : val
        }
    }
}