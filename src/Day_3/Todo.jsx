import React from 'react'
import {nanoid} from 'nanoid' 


function Todo() {
    const [task,setTask] = React.useState("")
    const [todo,setTodo] = React.useState([])

    const handleChange =(e) =>{

        setTask(e.target.value)
    }

    const handleClick =() =>{

      let taskobj ={
        id:nanoid(),
        title:task,
        status:false
     
      }
      setTodo([taskobj,...todo])
    }


  return (
    <div id='inputdiv'>
     <input id="input" type={"text"} value={task}  onChange={handleChange} placeholder="Write Something"   />
     <button  id ="btn" onClick={handleClick}>+</button>
     </div>
  )
}

export default Todo