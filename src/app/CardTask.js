import React from 'react'
import { useDispatch } from "react-redux"
import { removeTodo } from "./todo"
function CardTask({elt}) {
    const dispatch = useDispatch()
    const deleteTodo = () =>
    {
        dispatch(removeTodo(elt.id))
    }
  return (
    <div style={{display:"flex",justifyContent:'center',alignItems:'center'}}>
        <h3>{elt.text}</h3>
        <button onClick={deleteTodo}>X</button>
    </div>
  )
}

export default CardTask