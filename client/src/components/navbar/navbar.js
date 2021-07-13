import React from 'react'
import Logo from '../../assets/img/navbar__logo.svg'
import './navbar.scss'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {logout} from '../../reducers/userReducer'


const Navbar = () => {
	const isAuth = useSelector(state=>state.user.isAuth)
	const dispatch = useDispatch()
	return (
		<nav className="navbar">
			<div className="container">
				<div className="navbar__brand">
					<img className="navbar__logo" src={Logo} alt="Logo"/>
					<span className="navbar__title">CloudDisk</span>
				</div>
				<div className="navbar__links">
					{!isAuth && <Link className="navbar__link" to="/login">Sign In</Link>}
					{!isAuth &&	<Link className="navbar__link" to="/registration">Sign Up</Link>}
					{isAuth && <div className="navbar__link" onClick={()=>dispatch(logout())}>Log Out</div>}
				</div>
			</div>
		</nav>)
}

export default Navbar
