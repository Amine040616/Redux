import React, {useState} from 'react';
import './Todo.css'

function Todo({tasko, modifTask, completTache, deleteTache}){
    const [editero, setEditero]=useState(false);
    const [taskModifier, setTaskModifier]=useState('');
    function edito(){
        setEditero(!editero);
    }
    function textEdit(){
        modifTask(tasko.id, taskModifier);
        setTaskModifier('');
        edito()
    }

    return (
        <div>{editero ? 
            <div  className='editComplete'>
                <input type='text' value={taskModifier} onChange={e=>setTaskModifier(e.target.value)} placeholder='Modifiez la tâche...'></input><button onClick={e=>textEdit()}>SAVE</button><button onClick={()=>edito()}>CANCEL</button>
            </div>
            :
            <div className={tasko.isComplete ? 'styleTskDone' : 'styleTsk'}>
                <span className='xDelete' onClick={e=>deleteTache(tasko.id)}>X</span>
                <span className='ettask'>{tasko.task}</span>
                <div className='editComplete'><button onClick={()=>edito()}>Edit</button><button onClick={e=>completTache(tasko.id)}>{tasko.isComplete ? 'Incomplete' : 'Complete'}</button></div>
            </div>
            }
        </div>
    )
}
export default Todo;