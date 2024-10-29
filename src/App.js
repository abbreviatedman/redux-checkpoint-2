import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import TodoContainer from "./TodoContainer";
import store from "./store";

const {
  getState, // for getting the state from the Redux store
  dispatch, // for sending actions to the reducer
  subscribe, // for re-rendering our component if Redux's state changes
} = store;

const initialTodos = [
  {
    task: 'Learn Prop Drilling',
    id: 1,
    completed: true,
  },
  {
    task: 'Learn Redux',
    id: 2,
    completed: true,
  },
  {
    task: 'Learn Redux Toolkit',
    id: 3,
    completed: false,
  }
]

const App = () => {
  const [todos, setTodos] = useState(initialTodos);
  const [preferences, setPreferences] = useState(getState().preferences)

  useEffect(() => {
    const unsubscribe = subscribe(() => {
      setPreferences(getState().preferences)
    })

    return unsubscribe;
  }, [])

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const markAllComplete = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => ({ ...todo, completed: true }))
    );
  };

  const deleteAllCompleted = () => {
    setTodos((prevTodos) => prevTodos.filter((todo) => !todo.completed));
  };

  const deleteAllTodos = () => {
    setTodos([]);
  };

  const appStyles = {
    backgroundColor: preferences.darkMode ? "#121212" : "#fff",
    color: preferences.darkMode ? "#fff" : "#000",
    minHeight: "100vh",
    padding: "20px",
  };

  return (
    <div style={appStyles}>
      <Header />
      <TodoContainer
        todos={todos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
        markAllComplete={markAllComplete}
        deleteAllCompleted={deleteAllCompleted}
        deleteAllTodos={deleteAllTodos}
       />
      <Footer todos={todos} />
    </div>
  );
};

export default App;
