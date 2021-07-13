import React, {useEffect} from 'react'
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {auth} from '../../actions/user'
import Navbar from '../navbar/navbar'
import Registration from '../authorization/registration'
import Login from '../authorization/login'
import Disk from '../disk/disk'

import './app.scss'


export const App = () => {
	const isAuth = useSelector(state => state.user.isAuth)
	const dispatch = useDispatch()
	console.log(isAuth)
	useEffect(() => {
		return dispatch(auth())
	}, [dispatch])

	return (
		<BrowserRouter>
			<div className="app">
				<Navbar/>
				{!isAuth ?
					<Switch>
						<Route path="/login" component={Login}/>
						<Route path="/registration" component={Registration}/>
						<Redirect to="/login"/>
					</Switch>
				:
					<Switch>
						<Route exact path="/" component={Disk}/>
						<Redirect to="/"/>
					</Switch>
				}
			</div>
		</BrowserRouter>)
}
