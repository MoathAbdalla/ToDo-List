import React from 'react'

const ToDo = ({todo, onDelete, toggleComplete}) => {
  return (
    <div className='d-f'>
        <div style={{textDecoration : todo.isComplete ? "line-through" : ""}} onClick={toggleComplete}>{todo.text}</div>
        <button className='delete-btn' onClick={onDelete}>x</button>
    </div>
  )
}

export default ToDo