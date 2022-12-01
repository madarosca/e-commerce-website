import { useState } from 'react';
import {
	createUserDocumentFromAuth,
	signInAuthUserWithEmailAndPassword,
	signInWithGooglePopup,
} from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import './sign-in-form.styles.scss';

const defaultFormFields = {
	email: '',
	password: '',
};

const SignInForm = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { email, password } = formFields;

	const resetFormFields = () => {
		setFormFields(defaultFormFields);
	};

	const signInWithGoogle = async () => {
		const { user } = await signInWithGooglePopup();

		await createUserDocumentFromAuth(user);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			const response = await signInAuthUserWithEmailAndPassword(email, password);

			console.log(response);

			resetFormFields();
		} catch (error) {
			console.log('user  creation error', error);
		}
	};

	const handleChange = ({ target }) => {
		const { name, value } = target;

		setFormFields({ ...formFields, [name]: value });
	};

	return (
		<div className='sign-in-container'>
			<h2>Already have an account?</h2>
			<span>Sign in with your email and password</span>
			<form onSubmit={(event) => handleSubmit(event)}>
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
				<div className='buttons-container'>
					<Button type='submit'>Sign In</Button>
					<Button
						buttonType='google'
						onClick={signInWithGoogle}
					>
						Google Sign In
					</Button>
				</div>
			</form>
		</div>
	);
};

export default SignInForm;
