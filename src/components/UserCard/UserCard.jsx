import React from 'react'
import styles from './userCard.module.css'

export const UserCard = ({ user }) => {
	return (
		<div className={'users__cards-item ' + styles.card__item}>
			<div className={styles.card__itemImage}>
				<img src={user.photo} alt="" />
			</div>
			<div className={styles.card__itemName}>
				{user.name}
			</div>
			<div className={styles.card__itemName}>
				<p className={styles.card__paragraph}>{user.position}</p>
				<p className={styles.card__paragraph}>{user.email}</p>
				<p className={styles.card__paragraph}>{user.phone}</p>
			</div>
		</div>	
	)
}
