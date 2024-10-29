import { act } from "react";

const initialState = {
    todos: [
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
    ],

    preferences: { darkMode: false }
}

const rootReducer = (state = initialState, action) => {
    if (action.type === 'TOGGLE_DARK_MODE') {
        return {
            ...state,
            preferences: { darkMode: !state.preferences.darkMode }
        }
    }

    if (action.type === 'ADD_TODO') {
        return {
            ...state,
            todos: [
                ...state.todos,
                {id: Date.now(), task: action.payload, completed: false}
            ]
        }
    }

    return state;
}

export default rootReducer;