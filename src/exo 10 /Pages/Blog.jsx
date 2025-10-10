/* eslint-disable no-unused-vars */

import { NavLink, useLoaderData } from 'react-router-dom';

export function Blog() {
  const data = useLoaderData();

  return (
    <>
      <h1>Mon blog </h1>
      <ul>
        {data.map(d => (
          <li key={d.id}>
            <NavLink to={d.id}> {d.title} </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
}
