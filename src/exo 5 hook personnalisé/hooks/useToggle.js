/**
 * @param {boolean} initial
 */

import { useState } from 'react';

export function useToggle(initial = false) {
  const [state, setState] = useState(initial);
  const toggle = () => setState(v => !v);
  // v => !v
  // permet de changer la valeur si c'est vrai
  // on passe a false et inversement
  return [state, toggle];

  // state = valeur || toggle = modificateur
}

// This function is very useful when we need to
// make a value goes to true -> false and false -> true
