import React from 'react';
import { List, Typography, Divider } from 'antd';

import { BrowserRouter as Router, Link , Redirect} from "react-router-dom";
const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];
const handleSubmit = props => {
    // const { dispatch } = this.props;
    // dispatch({
    //   type: 'login/login',
    //   payload: values
    // });
    // console.log(props.history.push('/Page1'));
    props.history.push('/Page1')
    // return (<Redirect to="/Page1"/>)
  };

const Page3 = (props) => {
    console.log(props);
    return (
        <>
          <Divider orientation="left">Default Size</Divider>
          <List
            header={<div>Header</div>}
            footer={<div>Footer</div>}
            bordered
            dataSource={data}
            renderItem={item => (
              <List.Item>
                <Typography.Text mark>[ITEM]</Typography.Text> {item}
              </List.Item>
            )}
            onClick={() => handleSubmit(props)}
          />
          <Divider orientation="left">Small Size</Divider>
          <List
            size="small"
            header={<div>Header</div>}
            footer={<div>Footer</div>}
            bordered
            dataSource={data}
            renderItem={item => <List.Item>{item}</List.Item>}
          />
          <Divider orientation="left">Large Size</Divider>
          <List
            size="large"
            header={<div>Header</div>}
            footer={<div>Footer</div>}
            bordered
            dataSource={data}
            renderItem={item => <List.Item>{item}</List.Item>}
          />
        </>
      )
}

export default Page3