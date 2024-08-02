import React, { useContext, useEffect, useState } from 'react';
import NotificantionContext from '../../context/NotificationContext';
import Item from './Item';

export default function Notifications() {
  const { notifications, markAsRead } = useContext(NotificantionContext);
  
  const handleMarkAsRead = (id) => {
    markAsRead(id);
  }
  
  return (
    <>
        {notifications.map((item) => (
          <Item onClick={() => handleMarkAsRead(item.id)} key={item.id} item={item} />
        ))}
    </>

  )
}
