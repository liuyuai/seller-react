import './User.scss'
import React from 'react';
import {Avatar,Menu,Dropdown } from "antd";
import { UserOutlined } from '@ant-design/icons';

const menu = (
    <Menu>
      <Menu.Item>
        个人信息
      </Menu.Item>
      <Menu.Item>
        修改密码
      </Menu.Item>
      <Menu.Item>
        退出
      </Menu.Item>
      <Menu.Item>
        关于
      </Menu.Item>
    </Menu>
);


export default function User() {
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
