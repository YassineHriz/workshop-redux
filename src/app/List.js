import React from 'react'
import CardTask from './CardTask'
import { useSelector  } from "react-redux"

function List() {
    const todos = useSelector((state) => state.todo.todos)
  return (
    <div>{todos.map((elt)=><CardTask elt={elt}/>)}</div>
  )
}

export default List