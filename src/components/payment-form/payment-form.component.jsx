import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { BUTTON_TYPE_CLASSES } from '../button/button.component';
import { PaymentFormContainer, PaymentButton } from './payment-form.styles';

const PaymentForm = () => {
	const stripe = useStripe();
	const elements = useElements();

	const paymentHandler = async (e) => {
		e.preventDefault();

		if (!stripe || !elements) return;
	};

	return (
		<PaymentFormContainer>
			<div onSubmit={(e) => paymentHandler(e)}>
				<h2>Credit Card Payment:</h2>
				<CardElement />
				<PaymentButton buttonType={BUTTON_TYPE_CLASSES.inverted}>Pay now</PaymentButton>
			</div>
		</PaymentFormContainer>
	);
};

export default PaymentForm;
