import React, { Component } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Layout, Button, Input, Checkbox, Spin, Form } from 'antd';
// import logoImg from 'assets/images/logo1.png';
import { BrowserRouter as Router, Link , Redirect} from "react-router-dom";
const { Content } = Layout;
const FormItem = Form.Item;

// @connect(({ login, loading }) => ({
//   login,
//   loading: loading.models.login
// }))
export default class Login extends Component {
  state = {
    isLoginSuccess : false
  }
  handleSubmit = values => {
    // const { dispatch } = this.props;
    // dispatch({
    //   type: 'login/login',
    //   payload: values
    // });
    this.setState({isLoginSuccess:true});
    console.log(this.props);
    // this.props.history.push("/Page1")
    // return (<Redirect to={{pathname:"/Page1"}}/>)
  };

  render() {
    const { loading } = this.props;

    if(this.state.isLoginSuccess){
        console.log(this.state.isLoginSuccess);
        return <Redirect to={{ pathname:"/Page1"}} />;
    }
    return (
      <Layout className="full-layout login-page">
        <Content>
          <Spin tip="登录中..." spinning={!!loading}>
            <Form onFinish={this.handleSubmit} className="login-form" initialValues={{ userName: 'admin', password: 'admin', remember: true }}>
              <div className="user-img">
                {/* <img src={logoImg} alt="logo" /> */}
                <b>LANIF</b>
                <span>Admin</span>
              </div>
              <FormItem name="userName" rules={[{ required: true, message: '请输入您的用户名，示例admin' }]}>
                <Input
                  size="large"
                  prefix={<UserOutlined />}
                  placeholder="用户名"
                />
              </FormItem>
              <FormItem name="password" rules={[{ required: true, message: '请输入您的密码，示例admin' }]}>
                <Input
                  size="large"
                  prefix={<LockOutlined />}
                  type="password"
                  placeholder="密码"
                />
              </FormItem>
              <FormItem name="remember" valuePropName="checked" noStyle>
                <Checkbox>记住我</Checkbox>
              </FormItem>
              <Link className="login-form-forgot" to="#">
                忘记密码
                </Link>
              <Button
                size="large"
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                登录
                </Button>
              <div className="new-user">
                新用户？<Link to="/sign/register">现在注册</Link>
              </div>
            </Form>
          </Spin>
        </Content>
      </Layout>
    );
  }
}
