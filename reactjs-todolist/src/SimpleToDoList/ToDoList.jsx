import React,{useState} from "react";
import styles from './ToDoList.module.css'


function ToDoList(){

    const [newTask, setNewTask] = useState(null);
    const [tasks, setTasks] = useState([]);

    function handleInputChange(event){
        setNewTask(event.target.value);
    }

    function handelAddBtn(){
        if(newTask != ""){
            setTasks(t => [...t,newTask]);
            setNewTask("");
        }
    }

    function handleDelBtn(index){
        setTasks(t => t.filter((_,i) => i != index))
    }

    function handleUpBtn(index){
       if(index > 0){

            let updatedTasks = [...tasks];

            [updatedTasks[index], updatedTasks[index - 1]] = 
            [updatedTasks[index - 1], updatedTasks[index]]

            setTasks(updatedTasks);
       }
    }

    function handleDownBtn(index){
       let updatedTasks = [...tasks];

       [updatedTasks[index], updatedTasks[index + 1]] =
       [updatedTasks[index + 1], updatedTasks[index]];

       setTasks(updatedTasks);
    }

    return(

        <div className={styles.toDoList}>

            <h2>To-Do-List</h2>

            <input type="text" value={newTask}
                    placeholder="Enter new task.."
                    onChange={handleInputChange}/>
            
            <button className={styles.AddBtn} onClick={handelAddBtn}>Add</button>

            <ol>
                {tasks.map((item,index) => 

                    <li key={index}>

                        <span className="text">{item}</span>

                        <button className={styles.DeleteBtn} onClick={() => handleDelBtn(index)}>
                            Del
                        </button>

                        <button className={styles.moveBtn} onClick={() => handleUpBtn(index)}>
                            Up
                        </button>

                        <button className={styles.moveBtn} onClick={() => handleDownBtn(index)}>
                            Down
                        </button>
                    </li>
                )}
            </ol>

        </div>
    )
}
    
export default ToDoList