# Redux

### Advantages of Redux

- Centralizes your state. Sometimes called "single source of truth".
- Immutable by design. Redux is all about returning a NEW state. MUCH less likely to have bugs.
- Because of its architecture, Redux state is TRACKABLE and REWINDABLE.

```js
const todos = [];
todos.sort();
```

### The Restaurant

- Wait Staff
- Chef
- Guest

### Redux

- Action Creator (the wait staff) - How do you want to change state?

```js
function addTodo(text) {
    return {
        type: 'addTodo',
        payload: text,
    }
}
```

- Reducer (the chef) - Actually changes the state

```js
/// ALWAYS returns a new state
function todoReducer(state, action) {
    if (action.type === 'addTodo') {
        return [...state, {id: generateId(), text: action.payload, completed: false}]
    }

    if (action.type === 'DELETE_ALL_TODOS') {
        return [];
    }
}
```

What it used to look in your component:

```js
setTodos([...todos, newTodo])
```

What it looks like now:

```js
dispatch(addTodo(todoTextFromUser))
```