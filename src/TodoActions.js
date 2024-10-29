import React, { useEffect, useState } from "react";
import store from "./store";

const {getState, subscribe, dispatch} = store;

const TodoActions = (props) => {
  const [preferences, setPreferences] = useState(getState().preferences);
  useEffect(() => {
    return subscribe(() => {
      setPreferences(getState().preferences);
    })
  }, [])

  const {
    deleteAllTodos,
    markAllComplete,
    deleteAllCompleted,
  } = props;

  const actionsStyles = {
    marginTop: "20px",
    display: "flex",
    justifyContent: "space-between",
  };

  const buttonStyles = {
    padding: "10px 20px",
    fontSize: "16px",
    borderRadius: "4px",
    border: "none",
    cursor: "pointer",
    color: "white",
  };

  const completeStyles = {
    ...buttonStyles,
    backgroundColor: preferences.darkMode ? "#28a745" : "#28a745",
  };

  const deleteCompletedStyles = {
    ...buttonStyles,
    backgroundColor: preferences.darkMode ? "#dc3545" : "#dc3545",
  };

  const deleteAllStyles = {
    ...buttonStyles,
    backgroundColor: preferences.darkMode ? "#ffc107" : "#ffc107",
    color: preferences.darkMode ? "black" : "black",
  };

  return (
    <div style={actionsStyles}>
      <button style={completeStyles} onClick={markAllComplete}>
        Mark All Complete
      </button>
      <button style={deleteCompletedStyles} onClick={deleteAllCompleted}>
        Delete All Completed
      </button>
      <button style={deleteAllStyles} onClick={deleteAllTodos}>
        Delete All Todos
      </button>
    </div>
  );
};

export default TodoActions;
