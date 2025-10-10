import '../../index.css';
/**
 * @param {string} placeholder
 * @param {string} value
 * @param {(s: string) => void } onChange
 * @returns
 */

import { useId } from 'react';

export function Input({ placeholder, value, onChange, label }) {
  const id = useId();

  return (
    <div className="">
      <label className="form-label" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        className="border-2  border-black p-1 form-control"
        value={value}
        placeholder={placeholder}
        onChange={e => onChange(e.target.value)}
      />
    </div>
  );
}
