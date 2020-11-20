import React from 'react';
import { Menu } from "antd";
import {NavLink,useLocation} from "react-router-dom";

import menuList from '../../routes/menus'
//丰哥是通过 route 来进行 menu获取的 这样看起来应该更加正确一下  在生成的menu的列表的时候 做的hied 去除

const { SubMenu } = Menu;

function renderMenuItem(props) {
  return (
      <Menu.Item key={props.path}>
        <NavLink exact to={props.path}
        >{props.title}</NavLink>
      </Menu.Item>
  )
}

// return
function renderSubMenu(props) {
  return (
      <SubMenu key={props.path} title={props.title}>
        {
          props.childrens.map(item =>{
            return (
                item.hideInMenu?'':renderMenuItem(item)
            )
          })
        }
      </SubMenu>
  )
}



export default function LeftMenu() {
  const location = useLocation();
  const urlArr = location.pathname.split('/');
  let subMenuKey='';
  if(urlArr.length>2){
    subMenuKey = `/${urlArr[1]}`;
  }
  const itemMenuKey = location.pathname;
  
  return(
      <Menu theme="dark"
            mode="inline"
            defaultOpenKeys={[subMenuKey]}
            defaultSelectedKeys={[itemMenuKey]}
      >
        {menuList.map(item =>{
        return (
            item.childrens?renderSubMenu(item):renderMenuItem(item)
        )
      })}
      </Menu>
  )
}
