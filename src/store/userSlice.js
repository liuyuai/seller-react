import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import {getUserInfo} from '../api/base'

export const fetchUser = createAsyncThunk('user/fetchUser',async ()=>{
  const response = await getUserInfo();
  console.log(response);
  return response;
});

//当前用户状态
//  1.使用localStorage,sessionStorage  存储本地
//  2.每次调用接口 获取用户状态



const initialState = {
  loggedIn:true
};


const userSlice = createSlice({
  name:"user",
  initialState,
  reducers:{
    loginUSer:(state,action)=>{
      console.log(action.payload);
      state.loggedIn = true;
    }
  }
});

export const {loginUSer} = userSlice.actions;

export default userSlice.reducer


