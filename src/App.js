
import React, {useState} from 'react'
import Adding from './Components/AddFilter/AddFilter';
import TodoList from './Components/TodoList';
import './App.css';

function App() {
const [allComplet, setAllComplet]=useState(null);

  return (
    <div className="App">
      <Adding  setAllComplet={setAllComplet}/>
      <TodoList allComplet={allComplet}   />
    </div>
  );
}

export default App;
