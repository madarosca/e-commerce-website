import { useState } from 'react';
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';

const defaultFormFields = {
	displayName: '',
	email: '',
	password: '',
	confirmPassword: '',
};

const SignUpForm = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { displayName, email, password, confirmPassword } = formFields;

	const resetFormFields = () => {
		setFormFields(defaultFormFields);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		if (password !== confirmPassword) {
			alert('passwords do not match');
			return;
		}

		try {
			const { user } = await createAuthUserWithEmailAndPassword(email, password);
			await createUserDocumentFromAuth(user, { displayName });
			resetFormFields();
		} catch (error) {
			if (error.code === 'auth/email-already-in-use') {
				alert('Cannot create user, email already in use!');
			} else {
				console.log('user  creation error', error);
			}
		}
	};

	const handleChange = ({ target }) => {
		const { name, value } = target;

		setFormFields({ ...formFields, [name]: value });
	};

	return (
		<div>
			<h1>Sign up with your email and password</h1>
			<form onSubmit={(event) => handleSubmit(event)}>
				<FormInput
					label='Display Name'
					required
					type='text'
					name='displayName'
					value={displayName}
					onChange={handleChange}
				/>
				<FormInput
					label='Email'
					required
					type='email'
					name='email'
					value={email}
					onChange={handleChange}
				/>
				<FormInput
					label='Password'
					required
					type='password'
					name='password'
					minLength={6}
					value={password}
					onChange={handleChange}
				/>
				<FormInput
					label='Confirm Password'
					required
					type='password'
					name='confirmPassword'
					minLength={6}
					value={confirmPassword}
					onChange={handleChange}
				/>
				<button type='submit'>Sign Up</button>
			</form>
		</div>
	);
};

export default SignUpForm;
