import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
        <p className={styles.attribution}>
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
          Coded by <a href="https://anaamaral.netlify.app/">Ana Amaral</a>.
        </p>
    </footer>
  )
}
