/**
 * @param {string} label
 * @param {string} placeholder
 * @param {string} value
 * @param {(s: string) => void } onChange
 * @returns
 */

import { useId } from 'react';

export function Input({ label, value, onChange, type = 'text' }) {
  const id = useId();
  return (
    <div className="flex flex-col">
      <label id={id} className="mb-2">
        {label}
      </label>
      <input id={id} type={type} value={value} onChange={e => onChange(e.target.value)} className="border p-1" />
    </div>
  );
}
