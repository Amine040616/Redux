import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import { delTodo, completeTodo, editTodo } from '../../redux/actions/tdlstActions';

import './Todo.css'

function Todo({el}){

    const [editero, setEditero]=useState(false);
    const [taskModifier, setTaskModifier]=useState('');

    const dispatch = useDispatch();
    const complet= () => {
        dispatch(completeTodo(el.id))
    }

    const remov = ()=>{
        dispatch(delTodo(el.id))
    }

    const edit = () => {
        dispatch(editTodo({id:el.id ,task:taskModifier}));
        setTaskModifier('');
        edito()
    }

    function edito(){
        setEditero(!editero);
    }
    

    return (
        <div>{editero ? 
            <div  className='editComplete'>
                <input type='text' value={taskModifier} onChange={e=>setTaskModifier(e.target.value)} placeholder='Modifiez la tâche...'></input><button onClick={()=>edit()}>SAVE</button><button onClick={()=>edito()}>CANCEL</button>
            </div>
            :
            <div className={el.isComplete ? 'styleTskDone' : 'styleTsk'}>
                <span className='xDelete' onClick={e=>remov(7)}>X</span>
                <span className='ettask'>{el.task}</span>
                <div className='editComplete'><button onClick={()=>edito()}>Edit</button><button onClick={e=>complet()}>{el.isComplete ? 'Incomplete' : 'Complete'}</button></div>
            </div>
            }
        </div>
    )
}
export default Todo;