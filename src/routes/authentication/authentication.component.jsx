import SignInForm from '../../components/sign-in-form/sign-in-form.component';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';

const Authentication = () => {
	return (
		<div className='auth-container'>
			<h1>Sign In page</h1>
			<SignInForm />
			<SignUpForm />
		</div>
	);
};

export default Authentication;
