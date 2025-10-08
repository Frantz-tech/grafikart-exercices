import { useCallback, useReducer } from 'react';
// reduire l'etat en fonction de l'action
function todoReducer(state, action) {
  if (action.type === 'REMOVE_TODO') {
    return {
      ...state,
      todos: state.todos.filter(todo => todo !== action.payload),
    };
  }
  if (action.type === 'TOGGLE_TODO') {
    return {
      ...state,
      todos: state.todos.map(todo =>
        todo === action.payload
          ? {
              ...todo,
              checked: !todo.checked,
            }
          : todo
      ),
    };
  }
  if (action.type === 'CLEAR_COMPLETED') {
    return {
      ...state,
      todos: state.todos.filter(todo => !todo.checked),
    };
  }
  if (action.type === 'TOGGLE_FILTER') {
    return {
      ...state,
      showCompleted: !state.showCompleted,
    };
  }
  console.log({ state, action });
  return state;
}

export function useTodo() {
  const [state, dispatch] = useReducer(todoReducer, {
    showCompleted: true,
    todos: [
      {
        name: 'faire les courses',
        checked: false,
      },
      {
        name: 'ranger les courses',
        checked: false,
      },
      {
        name: 'manger les courses',
        checked: false,
      },
    ],
  });
  const visibleTodo = state.showCompleted ? state.todos : state.todos.filter(t => !t.checked);

  return {
    showCompleted: state.showCompleted,
    visibleTodo: visibleTodo,
    toggleTodo: useCallback(todo => dispatch({ type: 'TOGGLE_TODO', payload: todo }), []),
    removeTodo: useCallback(todo => dispatch({ type: 'REMOVE_TODO', payload: todo }), []),
    clearCompleted: useCallback(() => dispatch({ type: 'CLEAR_COMPLETED' }), []),
    toggleFilter: useCallback(() => dispatch({ type: 'TOGGLE_FILTER' }), []),
  };
}
