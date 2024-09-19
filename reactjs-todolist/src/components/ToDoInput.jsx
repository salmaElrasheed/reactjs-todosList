import react,{useState} from 'react'

function ToDoInput(props){

    const {handleAddBtn, newValue, setNewValue} = props

    function handleInputChange(event){
        setNewValue(event.target.value);
    }

    return(
        <header>
          <input type="text"
                value={newValue}
                onChange={handleInputChange}
                placeholder="Enter todo..."/>
            
          <button onClick={() =>{
            handleAddBtn(newValue);
            setNewValue('');
          }}>
            Add
          </button>

        </header>
    )
}


export default ToDoInput