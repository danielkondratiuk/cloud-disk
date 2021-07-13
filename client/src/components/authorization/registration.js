import React, {useState} from 'react'
import Input from '../input/input'
import {registration} from '../../actions/user'

import './auth.scss'

const Registration = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	return (
		<div className="registration">
			<div className="registration__title">Sign Up</div>
			<div className="registration__body">
				<Input value={email} setValue={setEmail} type="email" placeholder="Email"/>
				<Input value={password} setValue={setPassword} type="password" placeholder="Password"/>
			</div>
			<div>
				<button className="registration__btn btn btn-success"
								onClick={()=>registration(email,password)}
				>Sign Up</button>
			</div>
		</div>)
}

export default Registration
