import React, { useState } from 'react';
import styles from './main.module.css';
import ChuckNorris from '../ChuckNorris';
import SpeechBubble from '../SpeechBubble';

function Main() {
  const [joke, setJoke] = useState('');

  const getJoke = async () => {
    const res = await fetch('https://api.chucknorris.io/jokes/random');
    const json = await res.json();
    setJoke(json.value);
  };

  return (
    <main>
      <h1 className={styles.title}>Click Chuck Norris to hear a joke!</h1>
      <ChuckNorris onClick={getJoke} />
      <SpeechBubble joke={joke} />
    </main>
  );
}

export default Main;
