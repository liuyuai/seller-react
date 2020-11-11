import React,{useEffect,useState} from 'react'
import {Table,Space} from "antd";
import {getAllOrder} from "../../api/order";


export default function OrderList() {
  const [tableData,setTableData] = useState([]);
  useEffect(()=>{
    getAllOrder().then(data=>{
      console.log(data);
      setTableData(data[0]);
    })
  });
  
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <a>{text}</a>,
    },
    {
      title: 'describe',
      dataIndex: 'describe',
      key: 'describe',
      render: text => {
        return text&&text.a?text.a:''
      },
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
          <Space size="middle">
            <a>Invite {record.name}</a>
            <a>Delete</a>
          </Space>
      ),
    },
  ];
  
  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      describe:{a:1},
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      describe:{a:1},
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ];
  
  
  return (
      <div>
        <Table columns={columns} dataSource={data} />
      </div>
  )
}
