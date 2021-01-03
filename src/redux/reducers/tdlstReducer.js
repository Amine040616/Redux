import { ADD_TDLST, REMOV_TDLST, EDIT_TDLST, COMPLET_TDLST  } from "../constants/actionTypes";

const initialState={
    taches:[
        {id:1, task:'bayyadh', isComplete:false}, 
        {id:2, task:'bannay', isComplete:false}, 
        {id:3, task:'jardini', isComplete:false} 
    ],
}

export const tdlstReducer = (state=initialState, action)=>{
    switch (action.type){
        case ADD_TDLST:return{...state,taches:[...state.taches, action.payload]}
        case REMOV_TDLST:return {...state,taches:state.taches.filter(el => el.id!==action.payload)}
        case EDIT_TDLST:return {...state,taches:state.taches.map(el=> el.id===action.payload.id ? {...el, task:action.payload.task} : el)}
        case COMPLET_TDLST:return {...state,taches:state.taches.map(el=> el.id===action.payload ? {...el, isComplete:!el.isComplete} : el)}
        
        default:return state
    }
}

