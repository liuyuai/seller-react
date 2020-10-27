import React from 'react'
import {Breadcrumb} from "antd";
import {useLocation} from 'react-router-dom'



export default function BreadcrumbCustom() {
  //这里有两个方式 一种是通过url和数据 对比 显示不同面包屑
  //另一种是在点击link的时候 直接把面包屑 存一下就行
  const url = useLocation();
  const list = url.pathname.split('/');
  return (
      <Breadcrumb style={{ marginTop: '12px',marginLeft: "20px"}}>
        <Breadcrumb.Item>{list[1].slice(0,1).toUpperCase() + list[1].slice(1)}</Breadcrumb.Item>
        {list[2]?<Breadcrumb.Item>{list[2].slice(0,1).toUpperCase() + list[2].slice(1)}</Breadcrumb.Item>:''}
      </Breadcrumb>
  )
}
