import React, { useState, useContext, createContext } from 'react'

export const TodoContext = createContext(null)

export const useTodoContext = () => {
  return useContext(TodoContext)
}

export const TodoContextWrapper = ({ children }) => {
  const date = new Date()
  const [ todos, setTodos ] = useState([
    {
      id: 1,
      name: 'Add A new Todo',
      label: 'recently created',
      date: `${date.getFullYear()}-${date.getDate()}-${date.getMonth()}`
    }
  ])
  return (
    <TodoContext.Provider value={{ todos, setTodos}}>
      {children}
    </TodoContext.Provider>
  )
}