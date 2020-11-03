import { createSlice } from "@reduxjs/toolkit";


// export const fetchUser =createAsyncThunk(



const initialState = {
  id:'222'
};


const userSlice = createSlice({
  name:"user",
  initialState,
  reducers:{
    loginUSer(state,action){
      state.user = action.payload;
    }
  }
});

export const {loginUSer} = userSlice.actions;

export default userSlice.reducer


