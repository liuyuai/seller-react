import './User.scss'
import React from 'react';
import {useHistory} from 'react-router-dom'
import {Avatar,Menu,Dropdown } from "antd";
import { UserOutlined } from '@ant-design/icons';
import {clearToken} from '../../libs/tools'
import {useDispatch} from "react-redux";
import {loginOut} from '../../store/userSlice'


export default function User() {
  const dispatch = useDispatch();
  const history = useHistory();
  const handleClick = (e)=>{
    if(e.key === "layout"){
      clearToken();
      dispatch(loginOut());
      history.push('/login');
    }
  };
  const menu = (
      <Menu onClick={handleClick}>
        <Menu.Item key="userInfo">
          个人信息
        </Menu.Item>
        <Menu.Item key="updatePassword">
          修改密码
        </Menu.Item>
        <Menu.Item key="layout">
          退出
        </Menu.Item>
        <Menu.Item key="about">
          关于
        </Menu.Item>
      </Menu>
  );
  
  return (
      <div className="user-box">
        <Dropdown overlay={menu}>
          <div>
            <Avatar icon={<UserOutlined />} />
            <span className="user-name">Lenny</span>
          </div>
        </Dropdown>
      </div>
  )
}
