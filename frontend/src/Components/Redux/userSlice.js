import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    state : {
        isFetching:false    
    },
    user:{
        name:"",
        isAuthenticated:true
    }
}

const userSlice = createSlice({
    name:"user",
    initialState,
    reducer:{
        setIsFetching : (state) => {
            state.state.isFetching = true;
        }
    }
});


export const {
    setIsFetching 
} = userSlice.actions;

export default userSlice.reducer;