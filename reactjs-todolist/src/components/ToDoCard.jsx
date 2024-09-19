import React from 'react'

export default function ToDoCard(props) {

    const {children, handleDeleteBtn,handleEditBtn, index} = props;

  return (
    <li className="todoItem">
        {children}

        <div className="actionsContainer">
            <button onClick={() => handleEditBtn(index)}>
                  <i className="fa-solid fa-pen-to-square"></i>
            </button>
          
          <button onClick={() => handleDeleteBtn(index)}>
                <i className="fa-solid fa-trash"></i>
          </button>
         
        </div>
    </li>
  )
}
