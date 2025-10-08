/* eslint-disable no-unused-vars */

import { createPortal } from 'react-dom';

export function App() {
  return (
    <div
      style={{
        height: 300,
        overflowY: 'scroll',
        background: '#EEE',
        margin: 20,
        position: 'relative',
      }}
    >
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae ut voluptas et? A, et? Repudiandae,
        repellat ut quia exercitationem provident, nihil optio in quasi deleniti, doloribus eveniet. Nam, harum illum.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem voluptatem nihil et ratione, inventore rem
        provident iste cupiditate, nam esse tempora nemo quos placeat quibusdam explicabo reprehenderit! Qui, architecto
        ipsam.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis itaque cupiditate maiores neque harum
        fugiat, deserunt voluptatibus rem voluptatum ex ab quae incidunt omnis quaerat velit facere, quidem sed aperiam.
      </p>
      <Modal />
    </div>
  );
}

function Modal() {
  return createPortal(
    <div
      style={{
        position: 'absolute',
        top: 0,
        right: 0,
        padding: 10,
        border: 'solid 1px grey',
        background: '#FFF',
      }}
    >
      Je suis une modale
    </div>,
    document.body
  );
}

/** Teleporter un element et qu'on va pouvoir utiliser en dehors d'un parent
 * meme si il est dans components il est enfant de App, techniquement dans l'inspecteur
 * il est a la racine du body et donc n'as pas le meme style que son parent
 * 2 paramètres il faut donc le ratacher a quelquechose qui existe
 */
