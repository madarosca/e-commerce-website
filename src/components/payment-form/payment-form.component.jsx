import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { BUTTON_TYPE_CLASSES } from '../button/button.component';
import { PaymentFormContainer, PaymentButton } from './payment-form.styles';

const PaymentForm = () => {
	const stripe = useStripe();
	const elements = useElements();

	const paymentHandler = async (e) => {
		e.preventDefault();

		if (!stripe || !elements) return;

		const response = await fetch('/.netlify/functions/create-payment-intent', {
			method: 'post',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ amount: 10000 }),
		}).then((res) => res.json());

		const {
			paymentIntent: { client_secret },
		} = response;

		const paymentResult = await stripe.confirmCardPayment(client_secret, {
			payment_method: {
				card: elements.getElement(CardElement),
				billing_details: {
					name: 'Madalina Rosca',
				},
			},
		});

		if (paymentResult.error) {
			alert(paymentResult.error);
		} else {
			if (paymentResult.paymentIntent.status === 'succeeded') {
				alert('Payment successful');
			}
		}
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
