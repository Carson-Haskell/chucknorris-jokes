import React from 'react';
import styles from './speechbubble.module.css';
import 'animate.css';

function SpeechBubble({ joke }) {
  return (
    <div
      key={joke}
      className={`${styles.speech} ${styles.top} animate__animated animate__headShake`}
    >
      {joke || 'Hello, let me tell you a joke...'}
    </div>
  );
}

export default SpeechBubble;
