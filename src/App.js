import './App.css';
import { useState } from "react";
import List from './app/List';
import { useSelector , useDispatch } from "react-redux"
import { addTodo } from "./app/todo"
function App() {
  const dispatch = useDispatch()
  const count = useSelector((state) => state.todo.count)
  const todos = useSelector((state) => state.todo.todos)

  const [input , setInput] = useState("")

  const handleSubmit=(e)=>{
    e.preventDefault()
    dispatch(addTodo(input))
    setInput('')
  }
  return (
    <div className="App">
       <h1> 
        TODO LIST {count}
      </h1>
      <form onSubmit={handleSubmit}>
      <div>
        <input onChange={(e) => { 
          setInput(e.target.value)
          }}
          value={input}
          
          />
        <button type='submit'>+</button>
      </div>
      </form>
      <List/>
    </div>
  );
}

export default App;
