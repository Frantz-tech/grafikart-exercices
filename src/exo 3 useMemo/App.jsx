/* eslint-disable no-unused-vars */

import { useMemo, useState } from 'react';
import { Input } from './components/input';

export function App() {
  const [firstName, setFirstName] = useState('Jhon');
  const [password, setPassword] = useState('MotDePasse');

  const security = useMemo(() => {
    return passwordSecurity(password);
  }, [password]);

  return (
    <>
      <div className="container my-3 vstack gap-2">
        <Input label={"Nom d'utilisateur"} value={firstName} onChange={setFirstName} />
        <div>
          <Input label={'Password'} type={password} value={password} onChange={setPassword} />
          Sécurité : {security}
        </div>
      </div>
    </>
  );
}

function passwordSecurity(password) {
  // Fausse lenteur
  // let startTime = performance.now();
  // while (performance.now() - startTime < 200) {}

  if (password.length < 3) {
    return 'Faible';
  }
  if (password.length < 6) {
    return 'Moyen';
  }
  return 'Fort';
}
