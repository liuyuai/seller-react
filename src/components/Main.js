import React,{ useState,useEffect} from 'react'
import { Layout } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined, } from '@ant-design/icons';
import User from './/header/User'
import {Row ,Col } from 'antd'
import LeftMenu from './/leftMenu/LeftMenu'
import BreadcrumbCustom from './BreadcrumbCustom'

const {Header , Sider ,Content} = Layout;


export default function Main(prop) {
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
                <Col span={22}>
              { collapsed? <MenuUnfoldOutlined className='trigger' onClick={toggle} /> : <MenuFoldOutlined className='trigger' onClick={toggle} />}
                </Col>
                <Col span={2}>
                  <User></User>
                </Col>
              </Row>
            </Header>
            <BreadcrumbCustom />
            <Content className="site-layout-background"
                     style={{margin: '12px 16px', padding: 16, minHeight: 280}}>
              {/*所以routes 放在这里是没有错的 */}
              {/*<Routes></Routes>*/}
              {prop.children}
            </Content>
          </Layout>
          
        </Layout>
      </>
  );
}

