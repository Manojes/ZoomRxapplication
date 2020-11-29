import React from 'react';
import Todo from './Todo';
import './Todolist.css'
const TodoList =({todos,setTodos,setflag,addnewList})=>{
   


return(
    <div className="todo-container">        
        <div >            
            {               
                todos.map((todo)=>(                 
                    <Todo todo={todo} setTodos={setTodos} todos={todos} key={todo.id} text={todo.text} id={todo.id} />                    
                ))
            }      
               
             <button onClick={addnewList}> Add new card</button> 
        </div>
    </div>
)   
}
export default TodoList;