import React, {useState} from 'react';
import logo from '../../logoto.png';
import './AddFilter.css'



function AddFilter({addTache, setAllComplet}){

    const [nvelTache, setNvelTache] = useState('');

    function nvllTache(){

        addTache(nvelTache)
        setNvelTache('')
    }

    return (
        <div>
            <h1>To Do List</h1>
            <div className='oneLineTop'>
                <img src={logo} className="App-logo" alt="logo" />
                <div className='oneColumn'>
                    <div className='oneLine'>
                        <input type='text' value={nvelTache} onChange={e=>setNvelTache(e.target.value)} placeholder='Ecrivez la tâche à ajouter...'/>
                    </div>
                    <div className='oneLine'>
                        <button onClick={e=>setAllComplet(null)}>SHOW ALL TASKS</button>
                        <button onClick={e=>setAllComplet(false)}>TASKS COMPLETED</button>
                    </div>
                </div>
                <div className='addo'>
                    <button onClick={e=>nvllTache()}>ADD TASK</button>
                </div>
            </div> 
        </div>
    )

}
export default AddFilter;