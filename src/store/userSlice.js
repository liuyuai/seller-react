import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import {getUserInfo} from '../api/base'
import {setToken, setCookie} from "../libs/tools";

export const fetchUser = createAsyncThunk('user/fetchUser',async ()=>{
  const response = await getUserInfo();
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
  },
  extraReducers:{
    [fetchUser.fulfilled]:(state,action) =>{
      console.log(action);
    }
  }
});

export const {loginUSer} = userSlice.actions;

export const setUserToken = (data) =>{
  const {merchantId,token} = data;
  setToken(token);
  setCookie('merchantId', merchantId);
}



export default userSlice.reducer


