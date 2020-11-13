import './User.scss'
import React from 'react';
import {useHistory} from 'react-router-dom'
import {Avatar,Menu,Dropdown } from "antd";
import { UserOutlined } from '@ant-design/icons';
import {clearToken} from '../../libs/tools'




export default function User() {
  const history = useHistory();
  const handleClick = (e)=>{
    if(e.key === "layout"){
      clearToken();
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
