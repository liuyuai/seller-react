import React,{ useState} from 'react'
import { Layout,Menu } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined, } from '@ant-design/icons';
import {NavLink} from "react-router-dom";
import Routes from '../routes/index'



const {Header , Sider ,Content} = Layout;


export default function Main() {
  const [collapsed, setCollapsed] = useState(false);
  function toggle() {
    setCollapsed(!collapsed);
  }
  return (
      <>
        <Layout id="components-layout">
          
          <Sider trigger={null} collapsible collapsed={collapsed}>
            <div className="logo" />
            <Menu theme="dark" mode="inline">
              <Menu.Item>
                <NavLink to="/home">1</NavLink>
              </Menu.Item>
              <Menu.Item>
                <NavLink to="/about">2</NavLink>
              </Menu.Item>
              <Menu.Item>
                <NavLink to="/home">3</NavLink>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout className="site-layout">
            <Header className="site-layout-background" style={{padding:0}}>
              { collapsed? <MenuUnfoldOutlined className='trigger' onClick={toggle} /> : <MenuFoldOutlined className='trigger' onClick={toggle} />}
            </Header>
            <Content className="site-layout-background"
                     style={{margin: '24px 16px', padding: 24, minHeight: 280}}>
  
              <Routes></Routes>
            </Content>
          </Layout>
        </Layout>
      </>
  );
}

