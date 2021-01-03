import {ADD_TDLST, REMOV_TDLST, EDIT_TDLST, COMPLET_TDLST} from '../constants/actionTypes';

export const addTodo = (newTsk)=>{
    return{
        type: ADD_TDLST,
        payload: newTsk,
    };
}

export const delTodo = (id)=>{
    return{
        type: REMOV_TDLST,
        payload: id,
    };
}

export const editTodo = (p)=>{
    return{
        type: EDIT_TDLST,
        payload: p,
    };
}

export const completeTodo = (id)=>{
    return{
        type: COMPLET_TDLST,
        payload: id,
    };
}