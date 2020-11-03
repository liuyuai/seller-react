import './Login.scss'
import React from 'react'
import {Form,Input,Button,message } from "antd";
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom'
import { login } from '../../api/base'
import {loginUSer} from '../../store/userSlice'
import {useDispatch} from "react-redux";


export default function Login() {
  const dispatch = useDispatch();
  const history = useHistory();
  const onFinish = (values) => {
    login(values).then(data=>{
        dispatch(loginUSer(data));
        history.push("/home");
    }).catch((error)=>{
      message.error(error.message)
    })
  };
  
  return (
      <div className='bg'>
        <div className="login-box">
          <h3 className="title text-center">商家登录</h3>
          <Form
              name="normal_login"
              className="login-form"
              initialValues={{ remember: true }}
              onFinish={onFinish}
          >
            <Form.Item
                name="cellPhone"
                rules={[{ required: true, message: 'Please input your Username!' }]}
            >
              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please input your Password!' }]}
            >
              <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="密码"
              />
            </Form.Item>
            <Form.Item className="text-right">
              <a className="login-form-forgot" href="">
                忘记密码
              </a>
            </Form.Item>
    
            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                登录
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
  )
}


