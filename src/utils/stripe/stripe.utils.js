import { loadStripe } from '@stripe/stripe-js';

export const stripePromise = loadStripe(
	'pk_test_51MMWOiFyDPr57FafR0sAo058lacFxQkXUCWAzo9cUEGukw6VFMrXhWUAZv7ALf2PoH0jExKVfXWl5GXrdVbpefFD00lbqxoHRj'
);
