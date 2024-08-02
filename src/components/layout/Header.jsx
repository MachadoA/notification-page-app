import React, { useContext } from 'react'
import Button from './Button';
import style from './Header.module.css';
import NotificationContext from '../../context/NotificationContext';

export default function Header() {
  const { markAllAsRead, getUnread } = useContext(NotificationContext);
  const count = getUnread();

  return (
    <header className={style.header}>
        <h1>Notifications</h1>
        <p className={style.span}>{count}</p>
        <div>
          <Button onClick={markAllAsRead}/>
        </div>
    </header>
  )
}
