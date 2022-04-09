import { nanoid } from 'nanoid';
import React, { useState } from 'react'
import TodoItem from './TodoItem';

const TodoList=(props)=> {
    const [task,setTask]=useState("");
    const [todo,setTodo]=useState([])
    const handleChange=(e)=>
    {
       // console.log(e)
        setTask(e.target.value);
    }
    const handleClick=()=>
    {
        const taskObj={
            title:task,
            status:false,
            id:nanoid(),
        }
        setTodo([taskObj,...todo])
    }
  return (
      <>
      <input type="text" placeholder='enter name' value={task} onChange={handleChange}/>
      <button onClick={handleClick}> Add</button>
      {
          todo.map(item=>
            {
                return <TodoItem key={item.id} item={item}/>
            })
      }

      </>
   
  )
}

export default TodoList