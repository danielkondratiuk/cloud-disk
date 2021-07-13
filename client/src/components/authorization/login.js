import React, {useState} from 'react'
import Input from '../input/input'
import {login} from '../../actions/user'

import './auth.scss'
import {useDispatch} from 'react-redux'

const Login = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const dispatch = useDispatch()
	return (
		<div className="login">
			<div className="login__title">Sign In</div>
			<div className="login__body">
				<Input value={email} setValue={setEmail} type="email" placeholder="Email"/>
				<Input value={password} setValue={setPassword} type="password" placeholder="Password"/>
			</div>
			<div>
				<button className="login__btn btn btn-success"
								onClick={()=>dispatch(login(email, password))}
				>Sign In</button>
			</div>
		</div>)
}

export default Login
