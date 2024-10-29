import React, { useEffect, useState } from "react";
import store from "./store";

const {dispatch, getState, subscribe} = store;

const TodoItem = ({ todo, deleteTodo, toggleTodo}) => {
  const [preferences, setPreferences] = useState(getState().preferences);
  useEffect(() => {
    return subscribe(() => {
      setPreferences(getState().preferences);
    })
  }, [])

  const itemStyles = {
    padding: "10px",
    borderBottom: preferences.darkMode ? "1px solid #444" : "1px solid #ddd",
    textDecoration: todo.completed ? "line-through" : "none",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: preferences.darkMode ? "white" : "black",
  };

  const buttonStyles = {
    padding: "5px 10px",
    borderRadius: "4px",
    border: "none",
    backgroundColor: "#dc3545",
    color: "white",
    cursor: "pointer",
  };

  const toggleStyles = {
    padding: "5px 10px",
    borderRadius: "4px",
    border: "none",
    backgroundColor: "#28a745",
    color: "white",
    cursor: "pointer",
    marginRight: "10px",
  };

  return (
    <li style={itemStyles}>
      <span onClick={() => toggleTodo(todo.id)}>{todo.task}</span>
      <div>
        <button style={toggleStyles} onClick={() => toggleTodo(todo.id)}>
          {todo.completed ? "Undo" : "Complete"}
        </button>
        <button style={buttonStyles} onClick={() => deleteTodo(todo.id)}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
