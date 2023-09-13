import React from 'react';
import styles from './footer.module.css';

function Footer() {
  return (
    <footer>
      <p className={styles.text}>
        Made by Carson Haskell (not Chuck Norris) @
        https://github.com/Carson-Haskell
      </p>
    </footer>
  );
}

export default Footer;
