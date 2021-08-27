import React from 'react'
import { useTodoContext } from '../context/TodoContext'
import '../styles/todoitem.css'
import Button from './Button'

const TodoItem = ({ name, id, date, label}) => {
  const todo = useTodoContext()
  const deleteTodoItem = () => {
    const newTodoList = todo.todos.filter(t => t.id !== id)
    todo.setTodos(newTodoList)
  }
  return (
    <div className="todo__item">
        <div className="todo__item--details">
          <span>{date}</span>
          <p>{name}</p>          
        </div>
        <div className="todo__item--actions">
          <Button text='edit' />
          <Button event={deleteTodoItem} styles="btn-danger ml-2" text='delete' />
        </div>
    </div>
  )
}

export default TodoItem