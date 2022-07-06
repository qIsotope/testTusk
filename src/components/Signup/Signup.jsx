import React, { useEffect, useState } from 'react'
import styles from './signup.module.css'
import { MyButton } from '../UI_elements/MyButton/MyButton';
import { useForm } from "react-hook-form";
import { userService } from '../../services/users/users.service';
import { useAsync } from '../../hooks/useAsync';
import { getHelperText } from '../../utils/getHelperText';
import { createObj } from '../../utils/createFormData';
import { resetForm } from '../../utils/resetForm';
import { CssTextField } from '../../utils/createCustomTextFields';
import { MyRadio } from '../UI_elements/MyRadio/MyRadio';
import { UploadBlock } from '../UI_elements/UploadBlock/UploadBlock';
import { TitleOfSection } from '../TitleOfSection/TitleOfSection';
import { useToken } from '../../hooks/useToken';
import { usePostUser } from '../../hooks/usePostUser';



export const Signup = ({ setUsersValue, execute, signUpRef, setSuccess }) => {

	const { fetchValue, error, } = useAsync(userService.getPositions)
	const { token, tokenError, setTokenError } = useToken(userService.getToken)
	const { postingExecute, postingStatus, postingError, postingResponse, setPostingError } = usePostUser(userService.postUser)
	const [file, setFile] = useState(null)
	const [radioValue, setRadioValue] = useState('1')
	const { register, handleSubmit, formState: { errors, isValid }, setValue, reset, watch, clearErrors } = useForm({ mode: 'onChange', });

	const onSubmit = async (data) => {
		const postObject = createObj(file, data, radioValue)
		resetForm(reset, setFile)
		await postingExecute(postObject, token)
		const responseOfFirstUsers = execute()
		if (postingResponse?.data?.success === true) {
			setSuccess(true)
		}
		clearErrors(['name', 'phone', 'email', 'file'])
		setUsersValue(responseOfFirstUsers?.data?.users)
	}
	useEffect(() => {
		if (postingResponse?.data?.success === true) {
			setSuccess(true)
		}
	}, [postingResponse])

	React.useEffect(() => {
		const subscription = watch((value, { name, type }) => {
			setTokenError(null)
			setPostingError(null)
		});
		return () => subscription.unsubscribe();
	}, [watch]);

	useEffect(() => {
		file && setValue('file', file?.name, { shouldValidate: true })
	}, [file])

	return (
		<section ref={signUpRef} className={styles.signup}>
			<div className="container">
				<TitleOfSection>
					Working with POST request
				</TitleOfSection>
				<form onSubmit={handleSubmit((data) => onSubmit(data))} className={styles.signup__form}>
					<CssTextField error={!!errors.name} helperText={getHelperText(errors?.name?.type)}
						{...register('name', { required: true, maxLength: 20, minLength: 2 })}
						className={styles.signup__input} label="Your name" variant="outlined" />
					<CssTextField error={!!errors.email} helperText={getHelperText(errors?.email?.type)}
						{...register('email', {
							required: true, pattern: {
								value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
							},
						})}
						className={styles.signup__input} label="Email" variant="outlined" />
					<CssTextField error={!!errors.phone} helperText={getHelperText(errors?.phone?.type, true)}
						{...register('phone', {
							required: true, maxLength: 12, minLength: 12, pattern: {
								value: /^[\+]{0,1}380([0-9]{9})$/,
							},
						})} className={styles.signup__input}
						label="Phone" variant="outlined" type="number" pattern="[+]{1}[0-9]{11,14}" />
					{error
						? <div className='error-message'>Service temporarily unavailable. <br /> Position error Message:{error.message}</div>
						: <MyRadio radioValue={radioValue} setRadioValue={setRadioValue} fetchValue={fetchValue} />}
					<UploadBlock errors={errors} setFile={setFile} register={register} />
					<MyButton status={postingStatus} disabled={!isValid || tokenError || error || postingError || postingStatus === 'pending'}
						style={{ alignSelf: 'center' }}>Sign up</MyButton>
					{tokenError && <div className='error-message'>Service temporarily unavailable. <br /> Token error Message: {tokenError.message}</div>}
					{postingError && <div className='error-message'>{postingError.response.data.message}</div>}
				</form>
			</div>
		</section>
	)

}