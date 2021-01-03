import React from 'react';
import Todo from './Todo/Todo';

function TodoList({allComplet, taches, modifTask, completTache, deleteTache}){
    return (
        <div>
            <h3>List of your tasks</h3>
            {
                taches
                .filter(el=>el.isComplete!==allComplet )
                .map(el=><Todo tasko={el} modifTask={modifTask} completTache={completTache} deleteTache={deleteTache} />)
            }
            
        </div>
    )
}
export default TodoList;