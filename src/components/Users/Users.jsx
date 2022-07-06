import React, { useEffect, useState } from 'react'
import styles from './users.module.css'
import { UserList } from '../UserList/UserList'
import { MyButton } from '../UI_elements/MyButton/MyButton'
import { userService } from '../../services/users/users.service'
import { useGetUsersForPage } from '../../hooks/getUsersForPage'
import { TitleOfSection } from '../TitleOfSection/TitleOfSection'
import { ListOfSkeletons } from '../ListOfSkeletons/ListOfSkeletons'

export const Users = ({ status, value, error, setValue, usersRef }) => {
	const [page, setPage] = useState(2)
	const [disable, setDisable] = useState(false)
	const { executeForPage, statusForPage, valueForPage, errorForPage } = useGetUsersForPage(userService.getForPage, page, false)

	useEffect(() => {
		if (value && valueForPage) {
			setValue([...value, ...valueForPage?.data?.users])
		}
		if (valueForPage?.data?.total_pages >= page || valueForPage === null) {
			executeForPage(page)
		} else {
			setDisable(true)
		}
	}, [page])

	return (
		<section ref={usersRef} className={styles.users}>
			<div className="container">
				<TitleOfSection>
					Working with POST request
				</TitleOfSection>
				{status === "error" && <div className="error-message">ERROR WITH LOAD FILES, <br /> ERROR MESSAGE: {error.message}</div>}
				<UserList users={value} />
				{status === "pending" && <ListOfSkeletons />}
				<div className={styles.users__button}>
					<MyButton status={statusForPage} disabled={disable}
						onClick={() => setPage(page + 1)}>Show more</MyButton>
				</div>
				{statusForPage === "error" && <div style={{ marginTop: '40px' }} className='error-message'>ERROR WITH LOAD FILES, <br /> ERROR MESSAGE: {errorForPage.message}</div>}
			</div>
		</section>
	)
}
