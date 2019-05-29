import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className="navbar">
			<ul className="navbar__list">
				<li className="navbar__list__item">
					<NavLink className="navbar__list__item--link" to='/register'>Orders</NavLink>
				</li>
				<li className="navbar__list__item">
					<NavLink className="navbar__list__item--link" to='/register'>Products</NavLink>
				</li>
				<li className="navbar__list__item">
					<NavLink className="navbar__list__item--link" to='/register'>Invoices</NavLink>
				</li>
				<li className="navbar__list__item">
					<NavLink className="navbar__list__item--link" to='/login'>Cancelation</NavLink>
				</li>
			</ul>

			<ul className="navbar__list">
				<li className="navbar__list__item">
					<NavLink className="navbar__list__item--link" to='/register'>Register</NavLink>
				</li>
				<li className="navbar__list__item">
					<NavLink className="navbar__list__item--link" to='/login'>Login</NavLink>
				</li>
			</ul>
		</nav>
	)
}

export default Navbar
