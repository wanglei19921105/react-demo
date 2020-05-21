import React,{ Component } from 'react';
import { Button, Badge , Row , Col } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    MessageOutlined
  } from '@ant-design/icons';
import { Link } from "react-router-dom";

class header extends Component {
    constructor (props) {
        super (props)
        console.log(this.props);
    }
    state = {
        size: 'large',
    };
    render () {
        return (
            <Row>
                <Col justify="start" style={{ textAlign: 'center' }} span={1}>
                    {
                        this.props.collapsed ? <MenuUnfoldOutlined className='trigger' onClick= {this.props.toggle}/> : <MenuFoldOutlined className='trigger' onClick= {this.props.toggle}/>
                    }
                </Col>
                <Col span={19}></Col>
                <Col justify="end" span={4}>
                    <Badge count={5}>
                        <Link to="/Page1/message">
                        <Button type="primary" icon={<MessageOutlined />} size={this.state.size}>
                            消息
                        </Button>
                        </Link>
                    </Badge>
                </Col>
            </Row>
        )
    }
}

export default header