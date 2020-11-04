import React from 'react';
import { Menu } from "antd";
import {NavLink} from "react-router-dom";

import menuList from '../../routes/menus'

const { SubMenu } = Menu;

function renderMenuItem(props) {
  return (
      <Menu.Item key={props.id}>
        <NavLink exact to={props.path}>{props.title}</NavLink>
      </Menu.Item>
  )
}

// return
function renderSubMenu(props) {
  return (
      <SubMenu key={props.id} title={props.title}>
        {
          props.childrens.map(item =>{
            return (
                renderMenuItem(item)
            )
          })
        }
      </SubMenu>
  )
}



export default function LeftMenu() {
  return(
      <Menu theme="dark" mode="inline">
        {menuList.map(item =>{
        return (
            item.childrens?renderSubMenu(item):renderMenuItem(item)
        )
      })}
      </Menu>
  )
}
