
import {useState} from 'react'
import Adding from './Components/AddFilter/AddFilter';
import TodoList from './Components/TodoList';
import './App.css';

function App() {
const [taches, setTaches]=useState([{id:1, task:'bayyadh', isComplete:false}, {id:2, task:'bannay', isComplete:false}, {id:3, task:'jardini', isComplete:false} ]);
const [allComplet, setAllComplet]=useState(null);

function addTache(nvelTache){
  nvelTache && setTaches([...taches, {id:Math.random, task:nvelTache, isComplete:false}]);
}
function modifTask(id, nvoTxt){
  nvoTxt && setTaches(taches.map(el=> el.id===id ? {...el, task:nvoTxt} : el))
}
function completTache(id){
  setTaches(taches.map(el=> el.id===id ? {...el, isComplete:!el.isComplete} : el))
}
function deleteTache(id){
  setTaches(taches.filter(el => el.id!==id))
}

  return (
    <div className="App">
      <Adding addTache={addTache} setAllComplet={setAllComplet}/>
      <TodoList allComplet={allComplet} taches={taches} modifTask={modifTask} completTache={completTache} deleteTache={deleteTache}/>
    </div>
  );
}

export default App;
