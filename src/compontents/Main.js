import React,{ useState} from 'react'
import { Layout } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined, } from '@ant-design/icons';
import Routes from '../routes/index'
import User from '../compontents/header/User'
import {Row ,Col } from 'antd'
import LeftMenu from '../compontents/leftMenu/LeftMenu'





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
              <LeftMenu></LeftMenu>
          </Sider>
          <Layout className="site-layout">
            <Header className="site-layout-background" style={{padding:0}}>
              <Row>
                <Col span={20}>
              { collapsed? <MenuUnfoldOutlined className='trigger' onClick={toggle} /> : <MenuFoldOutlined className='trigger' onClick={toggle} />}
                </Col>
                <Col span={4} >
                  <User></User>
                </Col>
              </Row>
            </Header>
            <Content className="site-layout-background"
                     style={{margin: '24px 16px', padding: 24, minHeight: 280}}>
              {/*所以routes 放在这里是没有错的 */}
              <Routes></Routes>
            </Content>
          </Layout>
        </Layout>
      </>
  );
}

