import LoginReducer from 'features/Login/LoginSlice'
const { configureStore } = require("@reduxjs/toolkit")

const rootReducer = {
    login: LoginReducer,
}
const store = configureStore({
    reducer: rootReducer,
})
export default store;