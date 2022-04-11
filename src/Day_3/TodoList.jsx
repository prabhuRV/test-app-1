import React from 'react';

import Todo from './Todo';
import TodoItem from './TodoItem';
function TodoList() {
  

   
  

  return (
    <>
     {todo.map((item,index )=> {
          return <TodoItem   color = {index%2==0 ? "#87ffc5":
          "#7f7bff"} key = {item.id}{...item} handleRemove ={handleRemove}/>
      })}
      <div id='inputdiv'>
     <Todo/>
     </div>
    </>
  )
}

export default TodoList;