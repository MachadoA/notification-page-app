import React from 'react';
import styles from './Item.module.css';

export default function Item({ item, onClick }) {
    const { id, image, name, message, text, date, notification, idCategory, category } = item;

    let categoryClass = idCategory === 1 
        ? styles.playInformation
        : idCategory == 2
        ? styles.play
        : '';


    return (
        <article onClick={onClick} className={`${styles.dataItem} ${notification ? styles.active : ''}`}>
            <div className={styles.item}>
                <img className={styles.avatar} src={image} alt={`avatar of ${name}`} />
                <div>
                    <p className={styles.about}>
                        <span className={styles.nameAvatar}>{name}</span> {message} 
                        <span className={categoryClass}>{category}</span>
                        {notification && <span className={styles.notificationTrue}></span>}
                    </p>
                    <p>{date}</p>
                </div>
            </div>
            {text ? <p className={styles.textMessage}>{text}</p> : null }
        </article>
    )
}
