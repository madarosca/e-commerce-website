import { ChangeEvent, FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { AuthError, AuthErrorCodes } from 'firebase/auth';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import { SignUpContainer } from './sign-up-form.styles';
import { signUpStart } from '../../store/user/user.action';

const defaultFormFields = {
	displayName: '',
	email: '',
	password: '',
	confirmPassword: '',
};

const SignUpForm = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { displayName, email, password, confirmPassword } = formFields;
	const dispatch = useDispatch();

	const resetFormFields = () => {
		setFormFields(defaultFormFields);
	};

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (password !== confirmPassword) {
			alert('passwords do not match');
			return;
		}

		try {
			dispatch(signUpStart(email, password, displayName));
			resetFormFields();
		} catch (error) {
			if ((error as AuthError).code === AuthErrorCodes.EMAIL_EXISTS) {
				alert('Cannot create user, email already in use');
			} else {
				console.log('user creation encountered an error', error);
			}
		}
	};

	const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = target;

		setFormFields({ ...formFields, [name]: value });
	};

	return (
		<SignUpContainer>
			<h2>Don't have an account?</h2>
			<span>Sign up with your email and password</span>
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
				<Button type='submit'>Sign Up</Button>
			</form>
		</SignUpContainer>
	);
};

export default SignUpForm;
