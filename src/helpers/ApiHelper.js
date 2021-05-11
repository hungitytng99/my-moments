const listApiUri = {
    SIGN_UP: '/api/auth/signup',
    LOGIN: '/api/auth/login',
    VERIFY: (token) => {
        return '/api/auth/verify/' + token;
    },
    LOGOUT: '/api/auth/logout',
}
export default listApiUri;