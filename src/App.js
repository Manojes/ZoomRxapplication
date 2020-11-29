import React,{useState} from 'react';

import './App.css';
import TodoList from './components/Todolist';
function App() {

  const[inputText,setInputText] = useState("");
  const[todos,setTodos]= useState([]);
  const[flag,setflag] = useState(true);
  // const[Card,setCard] = useState(true)

  const inputTexthandler=(e)=>{
    setInputText(e.target.value);
}

const submitTodoHandler=(e)=>{  
    e.preventDefault();
    setTodos([
        ...todos,
        { text:inputText,completed:false,id:Math.random()*1000 }
    ])
    setInputText("");
    setflag(true);    
}

const addnewList=(e)=>{
  e.preventDefault();
    setTodos([
        ...todos,
        { text:inputText,completed:false,id:Math.random()*1000 }
    ])
    setInputText("");
  setflag(false);
}

const deleteTodoHandler =()=>{
    setTodos([""])
}

  return (
    <div className="App">
    <header>
      <h1> {inputText}
        </h1> 
    </header>
    <div>
            <form>
                <div>
            <textarea rows="4" spellcheck="false" value={inputText} onChange={inputTexthandler} type="text" /> 
            <div className="AlignButton">
              <button  onClick={submitTodoHandler}  > Add items </button>
              <button onClick={deleteTodoHandler}> Delete items </button>        
            </div>    
            </div>      
            </form>
           
        </div>


      
        <TodoList setTodos={setTodos} todos={todos} setflag={flag} addnewList={addnewList} > </TodoList>
        

      
      {/* <Card setCard={Card} > </Card> */}
    </div>
  );
}

export default App;
