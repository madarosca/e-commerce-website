import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyBhMspfIy2t0KanIu0C0FbtcGurMI-NULU',
	authDomain: 'rm-webshop.firebaseapp.com',
	projectId: 'rm-webshop',
	storageBucket: 'rm-webshop.appspot.com',
	messagingSenderId: '700699161796',
	appId: '1:700699161796:web:92674b39e0fe163a764591',
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
	prompt: 'select_account',
});
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
