import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import PropTypes from 'prop-types';

const Register = ({ setAlert }) => {

	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
		password2: ''
	});

	const { name, email, password, password2 } = formData;

	const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

	const onSubmit = e => {
		e.preventDefault();
		if (password !== password2) {
			setAlert("danger", "Passwords do not match!");
		} else {
			console.log(formData);
		}
	};

	return (
		<Fragment>
			<h1>Sign Up</h1>
			<p><i></i> Create Your Account</p>
			<form onSubmit={e => onSubmit(e)}>
				<div>
					<input type="text"
						placeholder="Name"
						name="name"
						value={name}
						onChange={e => onChange(e)}
						required />
				</div>
				<div>
					<input type="email"
						placeholder="Email Address"
						name="email"
						value={email}
						onChange={e => onChange(e)} />
					<small>
						This site uses Gravatar so if you want a profile image, use a Gravatar email
					</small>
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
				<div>
					<input
						type="password"
						placeholder="Confirm Password"
						name="password2"
						value={password2}
						onChange={e => onChange(e)}
						minLength="6" />
				</div>
				<input type="submit" value="Register" />
			</form>
			<p>
				Already have an account? <NavLink to="/login">Sign In</NavLink>
			</p>
		</Fragment>
	)
}

Register.propTypes = {
	setAlert: PropTypes.func.isRequired
};

export default connect(null, { setAlert })(Register);