import React,{useEffect,useState} from 'react'
import {Table,Space,Form, Input, Button ,Row } from "antd";
import {getVerifyList} from "../../api/order";



const QueryForm = ({fn}) => {
  const onFinish = (values) => {
    fn(values);
  };
  
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  
  return (
      <Form
          name="basic"
          onFinish={onFinish}
          initialValues={{ remember: true }}
          layout="inline"
          onFinishFailed={onFinishFailed}
      >
        <Row>
          <Form.Item
              label="订单编号"
              name="fkOrderId"
          >
            <Input />
          </Form.Item>
          <Form.Item
              label="买家手机号"
              name="memberPhone"
          >
            <Input />
          </Form.Item>
          <Form.Item
              label="核销开始时间"
              name="verifyTimeGE"
          >
            <Input />
          </Form.Item>
          <Form.Item
              label="核销结束时间"
              name="verifyTimeLT"
          >
            <Input />
          </Form.Item>
        </Row>
        <Row style={{marginTop:10,marginBottom:10}}>
          <Form.Item
              label="核销人手机号"
              name="verifierPhone"
          >
            <Input />
          </Form.Item>
          
          <Form.Item>
            <Button type="primary" htmlType="submit">
              查询
            </Button>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              重置
            </Button>
          </Form.Item>
        </Row>
      </Form>
  );
};




export default function OrderList() {
  const [tableData,setTableData] = useState([]);
  const [total,setTotal] = useState(0);
  const fetchData = (values) =>{
    getVerifyList(values).then(data=>{
      setTableData(data[0]);
      setTotal(data[1]);
    })
  };
  
  // react 中 通过参数 第二个参数传[]  来实现 created的形式
  useEffect(()=>{
      fetchData({page:1,rows:10});
    console.log('aaaa');
  },[]);
  useEffect(()=>{
    console.log('dddd');
  });
  
  
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
  
  function onChange(page,pageSize) {
    console.log(page);
  }
  
  
  
  return (
      <>
        <div>
          <QueryForm fn={fetchData} />
        </div>
        
        <div>
          <Table columns={columns} dataSource={tableData} rowKey={record => record.id} pagination={{pageSize:20,total:total,onChange:onChange}} />
        </div>
      </>
  )
}
