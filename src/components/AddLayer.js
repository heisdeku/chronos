import React, { useState} from 'react'
import { useTodoContext } from '../context/TodoContext'
import Button from './Button'

const AddLayer = () => {
  const todo = useTodoContext()
  const [ value, setValue ] = useState('')
  const addNewTodo = () => {
    const date = new Date()
    todo.setTodos([
      ...todo.todos,
      {
        id: todo.todos.length + 1,
        name: value,
        label: 'recently created',
        date: `${date.getFullYear()}-${date.getDate()}-${date.getMonth()}`
      }
    ])
    setValue('')
  }
  return (
    <div className="todo__upper">
      <input 
        type="text" 
        value={value} 
        onChange={e => setValue(e.target.value)} 
        className="todo__inputfield" 
        placeholder="Add a todo item" 
      />
      <Button event={addNewTodo} text="Add Todo" />
    </div>
  )
}

export default AddLayer