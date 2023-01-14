import { AnyAction } from 'redux';
import { signInFailed, signInSuccess, signOutFailed, signOutSuccess, signUpFailed } from './user.action';
import { IsLoading } from './user.types';
import { UserData } from '../../utils/firebase/firebase.utils';

export type UserState = {
    readonly currentUser: UserData | null;
    readonly isLoading: IsLoading;
    readonly error: Error | null;
}

const USER_INITIAL_STATE = {
    currentUser: null,
    isLoading: false,
    error: null,
};

export const userReducer = (state = USER_INITIAL_STATE, action: AnyAction): UserState => {
    if (signInSuccess.match(action)) {
        return { ...state, currentUser: action.payload }
    }

    if (signOutSuccess.match(action)) {
        return { ...state, currentUser: null }
    }

    if (
        signOutFailed.match(action) ||
        signInFailed.match(action) ||
        signUpFailed.match(action)
    ) {
        return { ...state, error: action.payload };
    }

    return state;
};
