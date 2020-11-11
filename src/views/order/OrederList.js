import React,{useEffect,useState} from 'react'
import {Table,Space} from "antd";
import {getVerifyList} from "../../api/order";


export default function OrderList() {
  const [tableData,setTableData] = useState([]);
  
  const fetchData = () =>{
    getVerifyList().then(data=>{
      setTableData(data[0]);
    })
  };
  useEffect(()=>{
    if(tableData.length === 0){
      fetchData();
    }
  },[tableData]);
  
  const columns = [
    {
      title: '订单编号',
      dataIndex: 'fkOrderId',
      key: 'fkOrderId'
    },
    {
      title: '订单状态',
      dataIndex: 'orderStateText',
      key: 'orderStateText'
    },
    {
      title: '用户电话',
      dataIndex: 'memberPhone',
      key: 'memberPhone',
    },
    {
      title: '专柜名称',
      dataIndex: 'verifierSellerName',
      key: 'verifierSellerName',
    },
    {
      title: '操作',
      key: 'action',
      render: (text, record) => (
          <Space size="middle">
            <a>干啥</a>
            <a>都行</a>
          </Space>
      ),
    },
  ];
  
  
  
  return (
      <div>
        <Table columns={columns} dataSource={tableData} />
      </div>
  )
}
