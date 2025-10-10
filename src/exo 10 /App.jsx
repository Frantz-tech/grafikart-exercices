/* eslint-disable no-unused-vars */

import { createBrowserRouter, NavLink, Outlet, RouterProvider, useRouteError } from 'react-router-dom';
import { Blog } from './Pages/blog';
import { Single } from './Pages/single';

export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      errorElement: <PageError />,
      children: [
        {
          path: 'blog',
          element: (
            <div className="row">
              <aside className="col-3">
                <h2> SideBar </h2>
              </aside>
              <main className="col-9">
                <Outlet />
              </main>
            </div>
          ),
          children: [
            {
              path: '',
              element: <Blog />,
              loader: () => fetch('https://jsonplaceholder.typicode.com/posts?_limit=10'),
            },
            {
              path: ':id',
              element: <Single />,
            },
          ],
        },
        {
          path: 'contact',
          element: <div> Contact </div>,
        },
      ],
    },
  ]);

  function Root() {
    return (
      <header>
        <nav>
          <NavLink to="/"> Home </NavLink>
          <NavLink to="blog"> Blog </NavLink>
          <NavLink to="contact"> Contact </NavLink>
        </nav>
        <div className="container my-4">
          <Outlet />
        </div>
      </header>
    );
  }
  function PageError() {
    const error = useRouteError();
    console.log('Erreur PageError : ', error);

    return <h1> Une erreur est survenue </h1>;
  }

  return <RouterProvider router={router} />;
}
