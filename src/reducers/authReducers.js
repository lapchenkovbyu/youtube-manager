import * as authActions from '../actions/auth'
const initialState = {
    user: {},
    loginAttempts: 0,
    authInProcess: false,
    youtubeAccount: {}
};

export default function auth(state = initialState, action) {
    switch (action.type) {
        case authActions.LOGIN_SUCCESS:
            return Object.assign({}, state, action.payload);
        case authActions.LOGIN_ATTEMPT_YOUTUBE:
            return Object.assign({}, state, {
                loginAttempts: ++state.loginAttempts,
                authInProcess: true
            });
        default:
            return state
    }
}