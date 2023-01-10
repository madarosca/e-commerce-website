import { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useSelector } from 'react-redux';

import { selectCartTotal } from '../../store/cart/cart.selector';
import { selectCurrentUser } from '../../store/user/user.selector';

import { BUTTON_TYPE_CLASSES } from '../button/button.component';
import { PaymentButton, PaymentFormContainer } from './payment-form.styles';

const PaymentForm = () => {
	const stripe = useStripe();
	const elements = useElements();
	const amount = useSelector(selectCartTotal);
	const currentUser = useSelector(selectCurrentUser);
	const [isProcessingPayment, setIsProcessingPayment] = useState(false);

	const paymentHandler = async (e) => {
		e.preventDefault();

		if (!stripe || !elements) {
			return;
		}
		setIsProcessingPayment(true);

		const response = await fetch('/netlify/functions/create-payment-intent.js', {
			method: 'post',
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json',
			},
			body: JSON.stringify({ amount: amount * 100 }),
		})
			.then((res) => {
				return res.json();
			})
			.catch((error) => {
				console.log(error);
				setIsProcessingPayment(false);
			});

		const clientSecret = response.paymentIntent.client_secret;

		const paymentResult = await stripe.confirmCardPayment(clientSecret, {
			payment_method: {
				card: elements.getElement(CardElement),
				billing_details: {
					name: currentUser ? currentUser.displayName : 'Mada Rosca',
				},
			},
		});

		setIsProcessingPayment(false);

		if (paymentResult.error) {
			alert(paymentResult.error.message);
		} else {
			if (paymentResult.paymentIntent.status === 'succeeded') {
				alert('Payment Successful!');
			}
		}
	};

	return (
		<PaymentFormContainer>
			<form onSubmit={paymentHandler}>
				<h2>Credit Card Payment:</h2>
				<CardElement />
				<PaymentButton
					buttonType={BUTTON_TYPE_CLASSES.inverted}
					isLoading={isProcessingPayment}
				>
					Pay Now
				</PaymentButton>
			</form>
		</PaymentFormContainer>
	);
};
export default PaymentForm;
