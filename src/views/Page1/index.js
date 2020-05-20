import React,{Component} from 'react';
import { Form, Input, Button, Checkbox, Divider } from 'antd';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};
const onFinish = values => {
  console.log('Success:', values);
};

const onFinishFailed = errorInfo => {
  console.log('Failed:', errorInfo);
};

class myForm extends Component {
    //   console.log(this);
    render() {
        return (
            <div className="box">
                <div className="left">
                    <ul>
                        <li>
                            <Link to="/Page1">Page1</Link>
                        </li>
                        <li>
                            <Link to="/Page1/detail">detail</Link>
                        </li>
                    </ul>
                </div>
                <div className="right">
                    {
                        this.props.routes.map((item,index)=>{
                            
                            return <Route key={index} exact path={item.path} component={item.component}></Route>
                            
                        })
                    }
                </div>
            </div>
            // <Form
            //   {...layout}
            //   name="basic"
            //   initialValues={{
            //     remember: true,
            //   }}
            //   onFinish={onFinish}
            //   onFinishFailed={onFinishFailed}
            // >
            //   <Form.Item
            //     label="Username"
            //     name="username"
            //     rules={[
            //       {
            //         required: true,
            //         message: 'Please input your username!',
            //       },
            //     ]}
            //   >
            //     <Input />
            //   </Form.Item>

            //   <Form.Item
            //     label="Password"
            //     name="password"
            //     rules={[
            //       {
            //         required: true,
            //         message: 'Please input your password!',
            //       },
            //     ]}
            //   >
            //     <Input.Password />
            //   </Form.Item>

            //   <Form.Item {...tailLayout} name="remember" valuePropName="checked">
            //     <Checkbox>Remember me</Checkbox>
            //   </Form.Item>

            //   <Form.Item {...tailLayout}>
            //     <Button type="primary" htmlType="submit">
            //       Submit
            //     </Button>
            //   </Form.Item>
            //   {/* <Page3/> */}

            // </Form>
        );
    };
}

export default myForm;