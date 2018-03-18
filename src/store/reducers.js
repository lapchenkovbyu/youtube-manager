export const reducers =
{
    loginSuccess(state = [], action)
    {
        if (action === 'LOGIN_SUCCESS') {
            console.log(state);
            return Object.assign({}, state, action.payload)
        }
        return state
    }
};