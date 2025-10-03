/**
 * @param {boolean} checked
 * @param {(v: boolean) => void} onChange
 * @param {string} label
 * @param {string} id
 */

import '../../index.css'

export function Checkbox({ checked, onChange, label, id }) {
  return (
    <div className='form-check'>
      <input
        className='form-check-input'
        type='checkbox'
        id={id}
        onChange={e => onChange(e.target.checked)}
        checked={checked}
      />
      <label htmlFor={id} className='form-check-label'>
        {' '}
        {label}{' '}
      </label>
    </div>
  )
}
