import { useFetch } from './hooks/useFetch';

export function App() {
  const { loading, data, errors } = useFetch('https://jsonplaceholder.typicode.com/posts?_limit=10');

  return (
    <div className="container my-2">
      {loading && (
        <div className="spinner-border" role="status">
          <span className="sr-only"> Loading... </span>
        </div>
      )}
      {errors && <div className="alert alert-danger"> {errors.toString()} </div>}
      {data && (
        <div>
          <ul>
            {data.map(post => (
              <li key={post.id}> {post.title}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
