import React from 'react'
import { useTodoContext  } from '../context/TodoContext'
import '../styles/todolist.css'
import TodoItem from './TodoItem'

const TodoList = () => {
  const todo = useTodoContext()
  return (
    <div className="todo__list">
      {
        todo.todos.map(t => {
          return (
            <TodoItem key={t.id} {...t} />
          )
        })
      }
    </div>
  )
}

export default TodoList