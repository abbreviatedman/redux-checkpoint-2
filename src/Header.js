import React, { useEffect, useState } from "react";
import store from "./store";
import { toggleDarkMode } from "./actions";

const {
  getState,
  dispatch,
  subscribe
} = store;

const Header = () => {
  const [preferences, setPreferences] = useState(getState().preferences);

  useEffect(() => {
    const unsubscribe = subscribe(() => {
      setPreferences(getState().preferences)
    })

    return unsubscribe;
  }, [])

  const headerStyles = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: preferences.darkMode ? "#1f1f1f" : "#f0f0f0",
    padding: "10px 20px",
    borderBottom: preferences.darkMode ? "1px solid #444" : "1px solid #ddd",
  };

  const buttonStyles = {
    backgroundColor: preferences.darkMode ? "#bb86fc" : "#007bff",
    color: "white",
    border: "none",
    padding: "10px",
    cursor: "pointer",
    borderRadius: "5px",
  };

  const buttonHoverStyles = {
    backgroundColor: preferences.darkMode ? "#3700b3" : "#0056b3",
  };

  return (
    <header style={headerStyles}>
      <h1>Todo List App</h1>
      <button
        style={buttonStyles}
        onMouseEnter={(e) =>
          (e.target.style.backgroundColor = buttonHoverStyles.backgroundColor)
        }
        onMouseLeave={(e) =>
          (e.target.style.backgroundColor = buttonStyles.backgroundColor)
        }
        onClick={() => dispatch(toggleDarkMode())}
      >
        {preferences.darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </header>
  );
};

export default Header;
