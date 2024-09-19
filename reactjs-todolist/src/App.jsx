import React,{useState,useEffect} from 'react'
import ToDoInput from './components/ToDoInput.jsx'
import ToDoList from './components/ToDoList.jsx'

function App() {

  const [newValue, setNewValue] = useState('');
  const [todos, setTodos] = useState([])

  function PersistData(newList){
    localStorage.setItem('todos',JSON.stringify({todos: newList}));
  }

  //MARK:- runs when mount
  useEffect(() => {

    //MARK:- if local isn't storage exists, then out of useEffect
    if(!localStorage){
      return;
    }

    //MARK:- if todos item isn't exists, then out of useEffect
    let localTodos = localStorage.getItem("todos");
    if(!localTodos){
      return;
    }

    localTodos = JSON.parse(localTodos).todos;
    setTodos(localTodos);


  },[]);

  function handleAddBtn(newTxtValue){
     let updateTodos = [...todos,newTxtValue];
     setTodos(updateTodos);

     //MARK:= update local storage
     PersistData(updateTodos);
  }

  function handleDeleteBtn(index){
      const updateTodos = todos.filter((_,i) => i !== index);
      setTodos(updateTodos);

     //MARK:= update local storage
     PersistData(updateTodos);
  }

  function handleEditBtn(index){
    let editedValue = todos[index];
    setNewValue(editedValue);

    //Delete
    handleDeleteBtn(index);

  }

  return (
    <div>
      <ToDoInput newValue={newValue} setNewValue={setNewValue} handleAddBtn={handleAddBtn}/>
      <ToDoList handleDeleteBtn={handleDeleteBtn} handleEditBtn={handleEditBtn} todos={todos} />
    </div>
  )
  
}

export default App
