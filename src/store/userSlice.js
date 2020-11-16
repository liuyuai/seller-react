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
//这里 我先不  normalization data
// 跳白页  可以使用loading的方式 根据转台判断 加一个loading

//

const initialState = {
  loggedIn:false,
  status:'idle',
  menuTree:[]
};


const userSlice = createSlice({
  name:"user",
  initialState,
  reducers:{
    loginUSer:(state,action)=>{
      state.loggedIn = true;
    },
    loginOut:(state,action)=>{
      state.loggedIn = false
    },
    setUserMenu:(state,action)=>{
      state.menuTree =action.payload.menuTree;
    }
  },
  extraReducers:{
    [fetchUser.pending]:(state,action) =>{
      state.status = 'loading';
    },
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

export const {loginUSer,loginOut,setUserMenu} = userSlice.actions;

export const setUserToken = (data) =>{
  const {merchantId,token} = data;
  setToken(token);
  setCookie('merchantId', merchantId);
}



export default userSlice.reducer


