const { createSlice } = require("@reduxjs/toolkit");

const LoginSlice = createSlice({
    name: 'login',
    initialState:[],
    reducers: {
        addUser(state, action) {
            //to do UpdateState
            console.log("save user to stored.", action.payload);
            state.push(action.payload);
        }
    }
});
const { reducer,actions } = LoginSlice;
export const { addUser }  = actions;
export default reducer;