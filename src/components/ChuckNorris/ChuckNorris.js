import React from 'react';

import styles from './chucknorris.module.css';

function ChuckNorris({ onClick }) {
  return (
    <>
      <img
        onClick={onClick}
        src="https://www.seekpng.com/png/detail/110-1104356_chuck-norris-wall-sticker-chuck-norris-png.png"
        alt="Chuck Norris"
      />
    </>
  );
}

export default ChuckNorris;
