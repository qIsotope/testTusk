import React, { useState, useRef } from 'react';
import { Header } from "./components/Header/Header";
import { MainPage } from "./components/MainPage/MainPage";
import { Signup } from "./components/Signup/Signup";
import { SuccesfulRegister } from './components/SuccessfulRegister/SuccesfulRegister';
import { Users } from "./components/Users/Users";
import { useAsync } from "./hooks/useAsync";
import { userService } from "./services/users/users.service";

function App() {
	const [disable, setDisable] = useState(false)
	const [success, setSuccess] = useState(false)
	const [users, setUsers] = useState([])
	const [, status, error, execute, setFetchValue] = useAsync(userService.getUsers, true, setUsers)
	const usersRef = useRef(null)
	const signUpRef = useRef(null)
	return (
		<div className="wrapper">
			<Header signUpRef={signUpRef} usersRef={usersRef} />
			<MainPage signUpRef={signUpRef} />
			<Users status={status} value={users} error={error} setValue={setUsers} usersRef={usersRef} disable={disable} setDisable={setDisable} />
			{success
				? <SuccesfulRegister setSuccess={setSuccess} />
				: <Signup setUsersValue={setFetchValue} execute={execute} signUpRef={signUpRef} setSuccess={setSuccess} setDisable={setDisable}/>
			}


		</div>
	);
}

export default App;
