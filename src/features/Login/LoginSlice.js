const { createSlice } = require("@reduxjs/toolkit");

const LoginSlice = createSlice({
    name: 'login',
    initialState:[],
    reducers: {
        addUser(state, action) {
            //to do UpdateState
            console.log("save user to stored.", action.payload);
            state.push(action.payload);
        },
        deleteUser(state){
            state = {};
        }
    }
});
const { reducer,actions } = LoginSlice;
export const { addUser , deleteUser }  = actions;
export default reducer;