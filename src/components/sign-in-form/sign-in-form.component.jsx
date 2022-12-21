import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormInput from '../form-input/form-input.component';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import { signInAuthUserWithEmailAndPassword, signInWithGooglePopup } from '../../utils/firebase/firebase.utils';
import { SignInContainer, ButtonsContainer } from './sign-in-form.styles.jsx';

const defaultFormFields = {
	email: '',
	password: '',
};

const SignInForm = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { email, password } = formFields;
	const navigate = useNavigate();

	const resetFormFields = () => {
		setFormFields(defaultFormFields);
	};

	const signInWithGoogle = async () => {
		try {
			await signInWithGooglePopup();
			resetFormFields();
			navigate('/');
		} catch (error) {
			console.log(error);
		}
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			await signInAuthUserWithEmailAndPassword(email, password);
			resetFormFields();
			navigate('/');
		} catch (error) {
			switch (error.code) {
				case 'auth/wrong-password':
					alert('Incorrect password for email!');
					break;
				case 'auth/user-not-found':
					alert('No user associated with this email!');
					break;

				default:
					console.log(error);
			}
		}
	};

	const handleChange = ({ target }) => {
		const { name, value } = target;

		setFormFields({ ...formFields, [name]: value });
	};

	return (
		<SignInContainer>
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
				<ButtonsContainer>
					<Button type='submit'>Sign In</Button>
					<Button
						type='button'
						buttonType={BUTTON_TYPE_CLASSES.google}
						onClick={signInWithGoogle}
					>
						Google Sign In
					</Button>
				</ButtonsContainer>
			</form>
		</SignInContainer>
	);
};

export default SignInForm;
