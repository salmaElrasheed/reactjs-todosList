import React from 'react'
import Card from './ToDoCard.jsx'

export default function ToDoList(props) {

    const {todos} = props;

  return (
    <div>
       <ol className="main">
        {todos.map((todo,todoIndex) =>
             <Card {...props} key={todoIndex} index={todoIndex}>
                <p>{todo}</p>
            </Card>
        )}
       </ol>
    </div>
  )
}
