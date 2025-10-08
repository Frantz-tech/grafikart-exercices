/* eslint-disable no-unused-vars */

import { memo, useCallback, useRef, useState } from 'react';
import { Input } from './components/input';

export function App() {
  const [name, setName] = useState('');

  const nameRef = useRef(name);
  nameRef.current = name;

  const handleClick = useCallback(() => {
    console.log(nameRef.current);
  }, []);

  return (
    <div className="container my-2 vstack gap-2">
      <div>
        <Input label="Prénom" onChange={setName} value={name} placeholder="Votre Prénom" />
        <div> {name.toLocaleUpperCase()}</div>
      </div>
      <InfoMemo onClick={handleClick} />
    </div>
  );
}

const InfoMemo = memo(function Info({ onClick }) {
  console.log('Info', 'render');

  return (
    <div className="alert alert-info" onClick={onClick}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat reiciendis recusandae repudiandae magni dolor
      quae illum nemo similique eaque a nostrum voluptas earum cumque esse, sint ipsa voluptate aliquam voluptatum!
    </div>
  );
});

// Memoiser pas les composant, a l'usage il faut l'utiliser si il y a des pb de lenteurs
// Composer des components clé pour qu'il se redent de la maniere la plus
// minimale possible

// UseCallback qui ne change pas quand les composants sont re rendu sauf si la dependance change
