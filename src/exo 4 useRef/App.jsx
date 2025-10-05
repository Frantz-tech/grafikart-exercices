/* eslint-disable no-unused-vars */

import { useRef } from 'react';
import { Input } from './components/input';

export function App() {
  const ref = useRef();
  return (
    <div>
      <Input ref={ref} label="prefix" />
    </div>
  );
}
