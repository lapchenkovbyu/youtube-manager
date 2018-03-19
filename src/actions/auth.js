export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ATTEMPT_YOUTUBE = "LOGIN_ATTEMPT_YOUTUBE";

export function loginAttemptYouTube() {
    return {
        type: LOGIN_ATTEMPT_YOUTUBE,
        date: Date.now()
    }
}

export function loginSucceed(params) {
    return {
        type:    LOGIN_SUCCESS,
        payload: params,
        date:    Date.now()
    }
}