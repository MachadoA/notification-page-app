import React from 'react';
import style from './Button.module.css';

export default function Button({onClick}) {
  return (
    <button className={style.btn} onClick={onClick}>
        Mark all as read
    </button>
  )
}
