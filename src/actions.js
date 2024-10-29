export const addTodo = (newTodo) => ({type: 'ADD_TODO', payload: newTodo});
export const deleteTodo = (id) => ({type: 'DELETE_TODO', payload: id});
export const toggleTodo = (id) => ({type: 'TOGGLE_TODO', payload: id});
export const markAllComplete = () => ({type: 'MARK_ALL_COMPLETE'});
export const deleteAllTodos = () => ({type: 'DELETE_ALL_TODOS'});
export const deleteCompletedTodos = () => ({type: 'DELETE_COMPLETED_TODOS'});
export const toggleDarkMode = () => ({type: 'TOGGLE_DARK_MODE'})