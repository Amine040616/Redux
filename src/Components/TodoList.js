import React from 'react';
import Todo from './Todo/Todo';
import {useSelector} from 'react-redux';

function TodoList({allComplet, modifTask, completTache, deleteTache}){
    const taches=useSelector((state)=>state.taches)
    return (
        <div>
            <h3>List of your tasks</h3>
            {
                taches
                .filter(el=>el.isComplete!==allComplet )
                .map(el=><Todo el={el} />)
            }
            
        </div>
    )
}
export default TodoList;