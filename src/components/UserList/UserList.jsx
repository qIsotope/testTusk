import React from 'react'
import { UserCard } from '../UserCard/UserCard'
import styles from './userList.module.css'
export const UserList = ({ users }) => {
	return (

		<div className={styles.users__cards}>
			{users?.map(u => <UserCard key={u.id} user={u} />)}
		</div>
	)
}
