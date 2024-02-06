import { useState, useRef } from 'react';

export default function Player() {
  //Amazena a referencia do que foi posto no DOM -> 'input' na variavel 'playerName'
  const playerName = useRef();
  const [enteredPlayerName, setEnteredPlayerName] = useState(null);

  function handleClick() {
    //'playerName.current.value' extrai o que foi escrito no 'input'
    setEnteredPlayerName(playerName.current.value);
    playerName.current.value = '';
  }
  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? 'unknown entity'}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
