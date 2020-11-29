import React,{useState} from 'react';
import './Todo.css';
const Todo = ({text,todo,todos,setTodos,setflag})=>{

    const[inputText,setInputText] = useState(text);
const deletehandler=()=> {
    setTodos(todos.filter((el)=> el.id !== todo.id));
}

const inputTexthandlerw=(e)=>{
    setInputText(e.target.value);
}

return(
    <div>   
         <div  className="todoadjust"> 
        <textarea  rows="4" spellcheck="false" value={inputText} onChange={inputTexthandlerw} textarea/>
            <div >
                <button className="trash" onClick={deletehandler}> trash</button>    
            </div>      
         </div>
    </div>
    

)
}

export default Todo;