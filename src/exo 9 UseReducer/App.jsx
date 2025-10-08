import { useTodo } from './hook/useTodo';

export function App() {
  const { visibleTodo, removeTodo, toggleFilter, toggleTodo, clearCompleted, showCompleted } = useTodo();

  return (
    <>
      <p>
        <input type="checkbox" checked={showCompleted} onChange={toggleFilter} />
        Afficher les tâches accomplies
      </p>
      <ul>
        {visibleTodo.map(todo => (
          <li key={todo.name}>
            <input type="checkbox" onChange={() => toggleTodo(todo)} checked={todo.checked} />
            {todo.name}
            <button onClick={() => removeTodo(todo)}> Supprimer </button>
          </li>
        ))}
      </ul>
      <button onClick={clearCompleted}> Supprimer les tâches accomplies</button>
    </>
  );
}
