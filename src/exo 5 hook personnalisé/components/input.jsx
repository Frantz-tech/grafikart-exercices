import '../../index.css';
/**
 * @param {string} placeholder
 * @param {string} value
 * @param {(s: string) => void } onChange
 * @returns
 */

import { forwardRef, useId } from 'react';

export const Input = forwardRef(function Input({ placeholder, value, onChange, label }, ref) {
  const id = useId();
  console.log(ref);

  return (
    <div>
      <label className="form-label" htmlFor={id}>
        {label}
      </label>
      <input
        ref={ref}
        id={id}
        className="border p-1 form-control"
        value={value}
        placeholder={placeholder}
        onChange={e => onChange(e.target.value)}
      />
    </div>
  );
});
//
