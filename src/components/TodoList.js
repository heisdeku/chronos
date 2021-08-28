import React from "react";
import { useTodoContext } from "../context/TodoContext";
import "../styles/todolist.css";
import TodoItem from "./TodoItem";
import _ from "lodash";

const TodoList = () => {
  const todo = useTodoContext();
  // i understand that using lodash here is pointless
  // just did it anyways.... as instructed
  return (
    <div className="todo__list">
      {_.map(todo.todos, t => {
        return <TodoItem key={t.id} {...t} />;
      })}
    </div>
  );
};

export default TodoList;
