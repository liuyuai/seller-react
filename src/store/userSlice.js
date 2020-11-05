import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import {getUserInfo} from '../api/base'
import {setToken, setCookie} from "../libs/tools";



export const fetchUser = createAsyncThunk('user/fetchUser',async ()=>{
  const response = await getUserInfo().catch(error=>error);
  return response;
});

//当前用户状态
//  1.使用localStorage,sessionStorage  存储本地
//  2.每次调用接口 获取用户状态



const initialState = {
  loggedIn:false,
  status:'idle'
};


const userSlice = createSlice({
  name:"user",
  initialState,
  reducers:{
    loginUSer:(state,action)=>{
      state.loggedIn = true;
    }
  },
  extraReducers:{
    [fetchUser.fulfilled]:(state,action) =>{
      state.status = 'succeeded';
      state.loggedIn = true;
      if(action.payload.code === 888){
        state.status = 'failed';
        state.loggedIn = false;
      }
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


