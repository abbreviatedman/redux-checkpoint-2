import React, { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoActions from "./TodoActions";
import store from "./store";

const {getState, subscribe} = store;

const TodoContainer = (props) => {
  const [preferences, setPreferences] = useState(getState().preferences);
  useEffect(() => {
    const unsubscribe = subscribe(() => {
      setPreferences(getState().preferences);
    })

    return unsubscribe;
  }, [])

  const {
    todos,
    toggleTodo,
    deleteTodo,
    markAllComplete,
    deleteAllCompleted,
    deleteAllTodos,
  } = props;

  const containerStyles = {
    padding: "20px",
    backgroundColor: preferences.darkMode ? "#1f1f1f" : "#f8f8f8",
    border: preferences.darkMode ? "1px solid #444" : "1px solid #ddd",
    borderRadius: "8px",
    margin: "20px",
    color: preferences.darkMode ? "white" : "black",
  };

  return (
    <div style={containerStyles}>
      <TodoForm />
      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
        toggleTodo={toggleTodo}
      />

      <TodoActions
        markAllComplete={markAllComplete}
        deleteAllTodos={deleteAllTodos}
        deleteAllCompleted={deleteAllCompleted}
      />
    </div>
  );
};

export default TodoContainer;
