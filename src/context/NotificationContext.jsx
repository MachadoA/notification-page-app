import { createContext, useEffect, useState } from 'react';
import data from '../../public/data.json';

const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        setNotifications(data);
    },[]);

    const markAllAsRead = () => {
        const updateNotifications = notifications.map(notification => ({
            ...notification,
            notification: false
        }));
        setNotifications(updateNotifications);
    }
    const markAsRead = (id) => {
        const updateNotifications = notifications.map(notification => 
            notification.id === id
            ? { ...notification, notification: false}
            : notification
        );
        setNotifications(updateNotifications);
        console.log('clicou')
    }

    const getUnread = () => {
        return notifications.filter(notification => notification.notification).length;
    }

    return (
        <NotificationContext.Provider value={{notifications, markAllAsRead, markAsRead, getUnread}}>
            {children}
        </NotificationContext.Provider>
    )
}

export default NotificationContext;