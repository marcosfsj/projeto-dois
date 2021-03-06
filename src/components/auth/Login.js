import React, { Fragment, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Login = () => {

	const [formData, setFormData] = useState({
		email: '',
		password: ''
	});

	const { email, password } = formData;

	const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

	const onSubmit = e => {
		e.preventDefault();
		console.log(formData);
	};

	return (
		<Fragment>
			<h1>Sign In</h1>
			<p><i></i> Sign Into Your Account</p>
			<form onSubmit={e => onSubmit(e)}>
				<div>
					<input type="email"
						placeholder="Email Address"
						name="email"
						value={email}
						onChange={e => onChange(e)} />
				</div>
				<div>
					<input
						type="password"
						placeholder="Password"
						name="password"
						value={password}
						onChange={e => onChange(e)}
						minLength="6" />
				</div>
				<input type="submit" value="Login" />
			</form>
			<p>
				Do not have an account? <NavLink to="/register">Sign Up</NavLink>
			</p>
		</Fragment>
	)
}

export default Login